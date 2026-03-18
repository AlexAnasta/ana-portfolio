import * as React from "react";

import { BADGE_BASE_CLASS, getBadgeClass } from "../lib/badgeStyles";

import type { Badge } from "../data/skillCategories";
import { skillIconRegistry } from "./icons/SkillIcons";

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
    <div className="flex flex-col gap-2 bg-n700 p-4 rounded-md">
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
              className={`${BADGE_BASE_CLASS} ${getBadgeClass(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      <p
        className="text-n200 text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}