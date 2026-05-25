type ClassItem = string | undefined | null | false;

export function cn(...classes: (ClassItem | ClassItem[])[]): string {
  return classes.flat().filter(Boolean).join(" ");
}
