import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const workspaceRoot = process.cwd();

async function loadLocaleObject(filePath, exportName) {
	const fullPath = path.join(workspaceRoot, filePath);
	const source = await fs.readFile(fullPath, "utf8");
	const transpiled = ts.transpileModule(source, {
		compilerOptions: {
			module: ts.ModuleKind.ESNext,
			target: ts.ScriptTarget.ES2020,
		},
		fileName: fullPath,
	});

	const encoded = encodeURIComponent(transpiled.outputText);
	const mod = await import(`data:text/javascript,${encoded}`);

	if (!(exportName in mod)) {
		throw new Error(`Missing export '${exportName}' in ${filePath}`);
	}

	return mod[exportName];
}

function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function compareKeys(left, right, prefix = "") {
	const missingInRight = [];
	const missingInLeft = [];
	const typeMismatches = [];

	const leftKeys = Object.keys(left);
	const rightKeys = Object.keys(right);

	for (const key of leftKeys) {
		const currentPath = prefix ? `${prefix}.${key}` : key;
		if (!rightKeys.includes(key)) {
			missingInRight.push(currentPath);
			continue;
		}

		const leftValue = left[key];
		const rightValue = right[key];

		if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
			if (leftValue.length !== rightValue.length) {
				typeMismatches.push(
					`${currentPath} (array length differs: ${leftValue.length} vs ${rightValue.length})`,
				);
			}
			continue;
		}

		if (isPlainObject(leftValue) && isPlainObject(rightValue)) {
			const nested = compareKeys(leftValue, rightValue, currentPath);
			missingInRight.push(...nested.missingInRight);
			missingInLeft.push(...nested.missingInLeft);
			typeMismatches.push(...nested.typeMismatches);
			continue;
		}

		const leftType = Array.isArray(leftValue) ? "array" : typeof leftValue;
		const rightType = Array.isArray(rightValue) ? "array" : typeof rightValue;
		if (leftType !== rightType) {
			typeMismatches.push(`${currentPath} (type differs: ${leftType} vs ${rightType})`);
		}
	}

	for (const key of rightKeys) {
		if (!leftKeys.includes(key)) {
			const currentPath = prefix ? `${prefix}.${key}` : key;
			missingInLeft.push(currentPath);
		}
	}

	return { missingInRight, missingInLeft, typeMismatches };
}

function printList(title, items) {
	if (items.length === 0) return;
	console.error(`\n${title}:`);
	for (const item of items) {
		console.error(`- ${item}`);
	}
}

async function main() {
	const en = await loadLocaleObject("src/i18n/en.ts", "en");
	const fr = await loadLocaleObject("src/i18n/fr.ts", "fr");

	const result = compareKeys(en, fr);
	const totalIssues =
		result.missingInRight.length + result.missingInLeft.length + result.typeMismatches.length;

	if (totalIssues > 0) {
		console.error("Translation structure check failed.");
		printList("Missing in fr", result.missingInRight);
		printList("Missing in en", result.missingInLeft);
		printList("Type mismatches", result.typeMismatches);
		process.exit(1);
	}

	console.log("Translation structure check passed (en <-> fr).");
}

main().catch((error) => {
	console.error("Translation check failed with runtime error.");
	console.error(error instanceof Error ? error.message : String(error));
	process.exit(1);
});
