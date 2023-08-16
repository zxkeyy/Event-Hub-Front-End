import { Grid, GridItem, Text } from "@chakra-ui/react";
import { BsCalendar4Week } from "react-icons/bs";
import parseDate from "../services/parse-date";

interface Props {
  startDate: string;
  endDate: string | null;
}

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
