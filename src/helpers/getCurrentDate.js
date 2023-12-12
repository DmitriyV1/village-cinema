export default function getCurrentDate(days = 0) {
  const day = 86400000 * days || days + 1;
  const time = new Date().getTime();
  const date = new Date(time + day);

  const currentDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  return currentDate;
}

// export function getCurrentHour(days = 0) {}
