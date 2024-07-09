import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringFormatter(str: string | undefined) {
  if (str)
    return str
      .toLowerCase()
      .trim()
      .replaceAll(/[^a-z0-9\s]/g, "")
      .replaceAll(/\s+/g, "-")
      .replaceAll(/-+/g, "-");
}
