import { months } from '@/constants/datesSelect';

export const getBirthday = (year: number, month: string, day: number) => {
  const newMonth = months.indexOf(month) + 1;
  const paddedDay = day < 10 ? `0${day}` : day.toString();
  const paddedMonth = newMonth < 10 ? `0${newMonth}` : newMonth.toString();

  return `${paddedDay}.${paddedMonth}.${year}`;
};
