import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const EventCard2Skeleton = () => {
  return (
    <Card
      bgColor="purple.900"
      borderRadius={10}
      overflow="hidden"
      boxShadow="2xl"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Skeleton height={270} />
      <CardBody padding={3}>
        <Grid
          templateAreas={`"date date" "title title" "location location" "primary secondary"`}
          templateColumns={"1fr 0.02fr"}
          paddingTop={0}
        >
          <GridItem area="title">
            <SkeletonText />
          </GridItem>
          <GridItem area="date"></GridItem>
          <GridItem area="location"></GridItem>
          <GridItem area="primary" padding={2}>
            <Skeleton width={150} height={30} />
          </GridItem>
          <GridItem area="secondary" padding={2}>
            <Skeleton width={50} height={30} />
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default EventCard2Skeleton;
