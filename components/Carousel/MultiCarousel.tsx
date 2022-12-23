import { createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const MAX_HEIGHT = 400;

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: MAX_HEIGHT,
    maxWidth: "80vw",
    [theme.fn.smallerThan("xl")]: {
      maxWidth: "90vw",
    },
    marginBottom: theme.spacing.xl * 2,
  },
  image: {
    height: MAX_HEIGHT,
    objectFit: "cover",
    objectPosition: "0px -100px",
    [theme.fn.smallerThan("sm")]: {
      objectPosition: "-100px -100px",
    },
  },
}));

function MultiCarousel({ images }: { images: any }) {
  const { classes } = useStyles();

  const slides = images.map((url: any) => (
    <Carousel.Slide key={url}>
      <Image src={url} alt="image" className={classes.image} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      className={classes.wrapper}
      align="start"
      mx="auto"
      slideSize="25%"
      slideGap="xl"
      loop
      withIndicators
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
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

export { MultiCarousel };
