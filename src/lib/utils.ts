import { months } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractMonthFromDateString = (date: string) => {
  const splitedDate = date.split("-");
  const month = splitedDate[1];
  const numericMonth = +month;
  return months[numericMonth];
};
