/**
 * Thai Buddhist Calendar (พ.ศ.) date utilities
 *
 * Thai years = Gregorian years + 543
 * e.g. พ.ศ. 2565 = 2022 CE
 */

/** Parse a date string that may use Thai Buddhist year (พ.ศ.) */
export function parseThaiDate(dateStr: string): Date {
  const match = dateStr.match(/(\d{4})/);
  if (match) {
    const year = parseInt(match[1]);
    if (year > 2400) {
      // Thai Buddhist calendar → convert to Gregorian
      const gregorianStr = dateStr.replace(String(year), String(year - 543));
      return new Date(gregorianStr);
    }
  }
  return new Date(dateStr);
}

/** Calculate detailed duration between two dates → { years, months, days } */
export function calcDuration(start: Date, end: Date) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    // Get days in previous month
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

/** Calculate total days between two dates */
export function calcTotalDays(start: Date, end: Date): number {
  return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}
