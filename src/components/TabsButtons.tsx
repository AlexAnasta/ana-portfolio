import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";
import { useEffect, useState } from "react";

import type { ReactNode } from "react";
import localSession from "@/services/localStorage";

export type TabItem = {
	value: string;
	label: string;
	component?: ReactNode;
};

type TabsButtonsProps = {
	tabs: readonly TabItem[];
	tabContents?: Readonly<Record<string, ReactNode>>;
} & Record<string, ReactNode | readonly TabItem[] | Readonly<Record<string, ReactNode>> | undefined>;

const TAB_SESSION_KEY = "active-home-tab";

const isTabValue = (
	value: unknown,
	tabs: readonly TabItem[],
): value is TabItem["value"] => {
	return typeof value === "string" && tabs.some((tab) => tab.value === value);
};

const getTabContent = (
	tab: TabItem,
	slotContents: Readonly<Record<string, ReactNode>>,
	tabContents?: Readonly<Record<string, ReactNode>>,
): ReactNode | undefined => {
	if (tab.component !== undefined) {
		return tab.component;
	}

	return tabContents?.[tab.value] ?? slotContents[tab.value];
};

const TabsButtons = ({ tabs, tabContents, ...slotProps }: TabsButtonsProps) => {
	const slotContents = slotProps as Readonly<Record<string, ReactNode>>;
	const [activeTab, setActiveTab] = useState<string>(tabs[0]?.value ?? "");
	const [mountedTabs, setMountedTabs] = useState<Set<string>>(
		() => new Set([tabs[0]?.value ?? ""]),
	);

	useEffect(() => {
		if (!tabs.length) {
			return;
		}

		const savedTab = localSession.get(TAB_SESSION_KEY);
		if (isTabValue(savedTab, tabs)) {
			setActiveTab(savedTab);
			return;
		}

		setActiveTab(tabs[0].value);
	}, [tabs]);

	useEffect(() => {
		if (!tabs.length) {
			return;
		}

		if (!isTabValue(activeTab, tabs)) {
			setActiveTab(tabs[0].value);
		}
	}, [activeTab, tabs]);

	useEffect(() => {
		if (!activeTab || !isTabValue(activeTab, tabs)) {
			return;
		}

		localSession.set(TAB_SESSION_KEY, activeTab);
		setMountedTabs((prev) => {
			if (prev.has(activeTab)) return prev;
			return new Set([...prev, activeTab]);
		});
	}, [activeTab, tabs]);

	if (!tabs.length) {
		return null;
	}

	return (
		<Tabs
			value={activeTab}
			onValueChange={(value) => {
				if (isTabValue(value, tabs)) {
					setActiveTab(value);
				}
			}}
			className="w-full "
		>
			<TabsList
				className={"bg-n700  w-full px-2 py-8 rounded-xl"}
			>
				{tabs.map((tab) => (
					<TabsTrigger
						key={tab.value}
						className={
							"w-full py-4 rounded-lg data-[state=active]:text-primary-dark data-[state=active]:bg-dark-theme"
						}
						value={tab.value}
					>
						{tab.label}
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map((tab) => (
				<TabsContent key={tab.value} value={tab.value}>
					{mountedTabs.has(tab.value)
						? getTabContent(tab, slotContents, tabContents)
						: null}
				</TabsContent>
			))}
		</Tabs>
	);
};

export default TabsButtons;
