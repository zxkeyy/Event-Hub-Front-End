const MONTHS = [
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
const MONTHS2 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const parseDate = (start_date: string, end_date: string) => {
  const startDateObj = new Date(start_date);

  if (!end_date) {
    return (
      DAYS[startDateObj.getDay()] +
      ", " +
      MONTHS2[startDateObj.getMonth()] +
      " " +
      startDateObj.getDate().toString() +
      ", " +
      startDateObj.getHours().toString().padStart(2, "0") +
      ":" +
      startDateObj.getMinutes().toString().padStart(2, "0")
    );
  }

  const endDateObj = new Date(end_date);

  if (startDateObj.getFullYear() != endDateObj.getFullYear()) {
    return (
      DAYS[startDateObj.getDay()] +
      ", " +
      MONTHS2[startDateObj.getMonth()] +
      " " +
      startDateObj.getDate().toString() +
      ", " +
      startDateObj.getFullYear() +
      " - " +
      DAYS[endDateObj.getDay()] +
      ", " +
      MONTHS2[endDateObj.getMonth()] +
      " " +
      endDateObj.getDate().toString() +
      ", " +
      endDateObj.getFullYear()
    );
  }

  if (startDateObj.getMonth() != endDateObj.getMonth()) {
    return (
      DAYS[startDateObj.getDay()] +
      ", " +
      MONTHS2[startDateObj.getMonth()] +
      " " +
      startDateObj.getDate().toString() +
      " - " +
      MONTHS2[endDateObj.getMonth()] +
      " " +
      endDateObj.getDate().toString()
    );
  }

  if (startDateObj.getDay() != endDateObj.getDay()) {
    return (
      DAYS[startDateObj.getDay()] +
      ", " +
      MONTHS2[startDateObj.getMonth()] +
      " " +
      startDateObj.getDate().toString().padStart(2, "0") +
      " - " +
      endDateObj.getDate().toString().padStart(2, "0")
    );
  }

  return (
    DAYS[startDateObj.getDay()] +
    ", " +
    MONTHS2[startDateObj.getMonth()] +
    " " +
    startDateObj.getDate().toString() +
    ", " +
    startDateObj.getHours().toString().padStart(2, "0") +
    ":" +
    startDateObj.getMinutes().toString().padStart(2, "0") +
    " - " +
    endDateObj.getHours().toString().padStart(2, "0") +
    ":" +
    endDateObj.getMinutes().toString().padStart(2, "0")
  );
};

export default parseDate;
