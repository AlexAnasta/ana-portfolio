export const BADGE_BASE_CLASS =
  "text-xs px-2 py-0.5 rounded font-bold capitalize transition-colors cursor-default";

export function getBadgeClass(badge: string): string {
  switch (badge) {
    case "wet lab":
      return "bg-teal-900 text-teal-300 hover:bg-teal-900/70";
    case "honours":
      return "bg-purple-900 text-purple-300 w-fit hover:bg-purple-900/70";
    case "dry lab":
    default:
      return "bg-amber-900 text-amber-300 hover:bg-amber-900/70";
  }
}