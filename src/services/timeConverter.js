const minToHr = function (mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return hours + " " + "ч" + " " + minutes + " " + "мин";
};

export default minToHr;
