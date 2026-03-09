import * as React from "react";
import { skillIconRegistry } from "./icons/SkillIcons";
import type { Badge } from "../data/skillCategories";

interface Props {
  name: string;
  nameItalic?: boolean;
  description: string;
  iconKey: string;
  badges?: Badge[];
}

export default function CustomSkillCard({ name, description, iconKey, badges, nameItalic }: Props) {
  const Icon = skillIconRegistry[iconKey];
  return (
    <div className="flex flex-col gap-2 bg-white dark:bg-n700 p-4 rounded-md">
      {Icon && (
        <div className="w-10 h-10" style={{ color: "#FAE081" }}>
          <Icon width={40} height={40} />
        </div>
      )}
      <h3 className={`text-lg font-bold ${nameItalic ? "italic" : ""}`}>{name}</h3>
      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {badges.map((badge) => (
            <span
              key={badge}
                className={`text-xs px-2 py-0.5 rounded font-bold capitalize transition-colors cursor-default ${
                badge === "wet lab"
                    ? "bg-teal-100 text-teal-700 hover:bg-teal-100/70 dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-900/70"
                    : "bg-amber-100 text-amber-700 hover:bg-amber-100/70 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-900/70"
                }`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      <p
        className="text-n700 dark:text-n200 text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}