import { BADGE_BASE_CLASS, getBadgeClass } from "../lib/badgeStyles";

import type { Badge } from "../data/skillCategories";
import { skillIconRegistry } from "./icons/SkillIcons";

interface Props {
  name: string;
  nameItalic?: boolean;
  description: string;
  iconKey: string;
  badges?: Badge[];
  level?: 1 | 2 | 3;
  levelLabel?: string;
}

const DOT_COLORS: Record<string, string> = {
  "dry lab": "#fcd34d",
  "wet lab": "#5eead4",
};

const LEVEL_LABEL: Record<number, string> = {
  1: "basic",
  2: "proficient",
  3: "advanced",
};

function DotRow({ color, level }: { color: string; level: number }) {
  return (
    <div className="flex gap-1">
      {([1, 2, 3] as const).map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: i <= level ? color : "#3a3a3a" }}
        />
      ))}
    </div>
  );
}

export default function CustomSkillCard({ name, description, iconKey, badges, nameItalic, level, levelLabel }: Props) {
  const Icon = skillIconRegistry[iconKey];
  const dotBadges = (badges ?? []).filter((b) => b === "dry lab" || b === "wet lab");

  return (
    <div className="flex flex-col gap-2 bg-n700 p-4 rounded-md">
      <div className="flex items-start justify-between">
        {Icon && (
          <div className="w-10 h-10" style={{ color: "#FAE081" }}>
            <Icon width={40} height={40} />
          </div>
        )}
        {level !== undefined && dotBadges.length > 0 && (
          <div className="flex flex-col gap-1 items-end">
            {dotBadges.map((badge) => (
              <DotRow
                key={badge}
                color={DOT_COLORS[badge]}
                level={level}
              />
            ))}
            <span className="text-xs italic text-n400 leading-none">
              {levelLabel ?? LEVEL_LABEL[level]}
            </span>
          </div>
        )}
      </div>
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