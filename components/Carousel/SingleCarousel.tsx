import { createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import image1 from "../../public/images/img1.jpg";
import image2 from "../../public/images/img2.jpg";
import image3 from "../../public/images/img3.jpg";
import image4 from "../../public/images/img4.jpg";
import image5 from "../../public/images/img5.jpg";
import { useMediaQuery } from "@mantine/hooks";

const MAX_HEIGHT = 600;

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: MAX_HEIGHT,
    maxWidth: 380,
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
    objectPosition: "80px -80px",
  },
}));

const images = [image1, image2, image3, image4, image5];

function SingleCarousel({ setEmbla }: { setEmbla: (args: any) => void }) {
  const { classes } = useStyles();
  const largeScreen = useMediaQuery("(min-width: 768px)");

  const slides = images.map((url, i) => (
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
