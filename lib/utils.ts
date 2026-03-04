export type ClassNameValue =
  | string
  | number
  | null
  | undefined
  | boolean;

export function cn(...classes: ClassNameValue[]): string {
  return classes.filter(Boolean).join(" ");
}
