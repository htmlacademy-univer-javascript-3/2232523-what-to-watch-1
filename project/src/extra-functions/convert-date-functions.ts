export function convertDateShort(date: string): string {
  const curDate = new Date(date);
  return (`${curDate.getFullYear()}-${curDate.getMonth().toString().padStart(2, '0')}-${curDate.getDate().toString().padStart(2, '0')}`);
}

export function convertDateLong(date: string): string {
  const curDate = new Date(date);
  return (`${curDate.toLocaleString('eng', {month: 'long'})} ${curDate.getDate()}, ${curDate.getFullYear()}`);
}
