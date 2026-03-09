export const BADGE_BASE_CLASS =
  "text-xs px-2 py-0.5 rounded font-bold capitalize transition-colors cursor-default";

export function getBadgeClass(badge: string): string {
  switch (badge) {
    case "wet lab":
      return "bg-teal-100 text-teal-100 hover:bg-teal-100/70 dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-900/70";
    case "honours":
      return "bg-purple-100 text-purple-800 hover:bg-purple-800/70 dark:bg-purple-900 dark:text-purple-300 w-fit dark:hover:bg-purple-900/70";
    case "dry lab":
    default:
      return "bg-amber-100 text-amber-700 hover:bg-amber-100/70 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-900/70";
  }
}