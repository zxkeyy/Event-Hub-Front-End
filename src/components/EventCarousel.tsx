import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useEvents from "../hookers/useEvents";
import EventCard2 from "./EventCard2";
import { Box, HStack, Skeleton, Text } from "@chakra-ui/react";

const EventCarousel = () => {
  const { data: events, isLoading } = useEvents();

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider-parent">
      {isLoading && (
        <>
          <Skeleton width={200} height={300} />
          <Skeleton width={200} height={300} />
          <Skeleton width={200} height={300} />
          <Skeleton width={200} height={300} />
        </>
      )}
      {events?.results.map((event) => (
        <Box padding={2}>
          <EventCard2 event={event} />
        </Box>
      ))}
    </Slider>
  );
};

export default EventCarousel;
