export function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} до н.э.`;
  }

  return `${year}`;
}
