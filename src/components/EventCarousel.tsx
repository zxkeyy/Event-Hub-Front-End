import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useEvents from "../hookers/useEvents";
import EventCard2 from "./EventCard2";
import { Box, Text } from "@chakra-ui/react";
import EventCard2Skeleton from "./EventCard2Skeleton";
import { EventQuery } from "../store";

interface Props {
  query?: EventQuery;
}
const EventCarousel = ({ query }: Props = {}) => {
  const { data: events, isLoading } = useEvents(query ? query : undefined);

  if (events?.count === 0)
    return <Text>Sorry we couldn't find any events to show here.</Text>;

  const settings = {
    className: "center",
    infinite: events ? events?.count > 4 : false,
    speed: 100,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider-parent">
      {isLoading &&
        [...Array(4).keys()].map((n) => (
          <Box key={n} padding={2}>
            <EventCard2Skeleton />
          </Box>
        ))}
      {events?.results.map((event) => (
        <Box key={event.id} padding={2}>
          <EventCard2 event={event} />
        </Box>
      ))}
    </Slider>
  );
};

export default EventCarousel;
