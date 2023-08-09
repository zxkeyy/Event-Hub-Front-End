import { Grid, GridItem, Text } from "@chakra-ui/react";
import { BsCalendar4Week } from "react-icons/bs";

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

interface Props {
  startDate: string;
  endDate: string | null;
}

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

const DateTimeInfo = ({ startDate, endDate }: Props) => {
  return (
    <Grid
      templateAreas={'"icon startDate" "icon endDate"'}
      templateColumns={"0.15fr 1fr"}
      padding={2}
    >
      <GridItem area="icon">
        <BsCalendar4Week size={35} />
      </GridItem>
      <GridItem area="startDate">
        <Text fontWeight="semibold">{parseDate(startDate)} -</Text>
      </GridItem>
      <GridItem area="endDate">
        {endDate && (
          <Text fontWeight="semibold">{parseDate(endDate)}</Text>
        )}
      </GridItem>
    </Grid>
  );
};

export default DateTimeInfo;
