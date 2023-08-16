const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const parseDate = (date: string) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const hour = date.slice(11, 13);
  const minuit = date.slice(14, 16);
  let time;
  if (parseInt(hour) > 12) {
    time = (parseInt(hour) - 12).toString() + ":" + minuit + " PM";
  } else {
    time = parseInt(hour).toString() + ":" + minuit + " AM";
  }

  let parsedDate =
    months[parseInt(month) - 1] + " " + day + ", " + year + " | " + time;
  return parsedDate;
};

export default parseDate;
