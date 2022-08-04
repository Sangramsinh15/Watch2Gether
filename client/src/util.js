import dayjs from "dayjs";
/**
 * The funtion is responsible for getting the date 
 * that is used for the calendar component
 * @param {*} month 
 * @returns The function returns transfomed date
 */
export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  return new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
}
