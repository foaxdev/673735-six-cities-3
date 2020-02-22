const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const leftPad = (str, padString, targetLength) => {
  return str.toString().padStart(targetLength, padString);
};

export const formatDatetime = (givenDate) => {
  const date = new Date(givenDate);

  const dateYear = date.getFullYear();
  const dateMonth = leftPad(date.getMonth() + 1, `0`, 2);
  const dateDay = leftPad(date.getDate(), `0`, 2);

  return `${dateYear}-${dateMonth}-${dateDay}`;
};

export const formatDate = (givenDate) => {
  const date = new Date(givenDate);

  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();

  return `${monthNames[dateMonth]} ${dateYear}`;
};
