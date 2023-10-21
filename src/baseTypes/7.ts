/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfWeek {
  monday = "Monday",
  tuesday = "Tuesday",
  wedns = "Wednesday",
  thersd = "Thursday",
  friday = "Friday",
  satur = "Saturday",
  sunday = "Sunday",
}

function isWeekend(daysOfWeek: string): boolean {
  return daysOfWeek === "Sunday" || daysOfWeek === "Saturday";
}
