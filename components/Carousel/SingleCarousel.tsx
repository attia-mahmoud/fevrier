import { createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

const MAX_HEIGHT = 600;

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: MAX_HEIGHT,
    maxWidth: 450,
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "70vw",
    },
    [theme.fn.smallerThan("xs")]: {
      maxWidth: "90vw",
    },
  },
  image: {
    height: MAX_HEIGHT,
    objectFit: "cover",
    objectPosition: "0px -80px",
  },
}));

function SingleCarousel({
  setEmbla,
  images,
}: {
  setEmbla: (args: any) => void;
  images: any;
}) {
  const { classes } = useStyles();
  const largeScreen = useMediaQuery("(min-width: 768px)");

  const slides = images.map((url: any, i: number) => (
    <Carousel.Slide key={i}>
      <Image src={url} alt="image" className={classes.image} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      mx="auto"
      align="center"
      className={classes.wrapper}
      loop
      getEmblaApi={setEmbla}
      draggable={largeScreen ? false : true}
      withControls={largeScreen ? false : true}
      withIndicators={largeScreen ? false : true}
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: "width 250ms ease",

          "&[data-active]": {
            width: 40,
          },
        },
        control: {
          width: 50,
          aspectRatio: "1",
          backgroundColor: "#edede9",
          color: "black",
          marginInline: "-2rem",
        },
      }}
    >
      {slides}
    </Carousel>
  );
}

export { SingleCarousel };
