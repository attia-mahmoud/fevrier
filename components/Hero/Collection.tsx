import {
  createStyles,
  Image,
  Container,
  Title,
  Group,
  Text,
  List,
  ThemeIcon,
  ActionIcon,
} from "@mantine/core";
import { IconCheck, IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { Embla } from "@mantine/carousel";
import { Button } from "../Button";
import { SingleCarousel } from "../Carousel";
import image12 from "../../public/images/img12.jpg";
import image13 from "../../public/images/img13.jpg";
import image14 from "../../public/images/img14.jpg";
import image15 from "../../public/images/img15.jpg";
import image16 from "../../public/images/img16.jpg";
import { useCallback, useState } from "react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl,
    position: "relative",
  },

  content: {
    marginRight: theme.spacing.xl * 3,
    marginTop: "10%",
    position: "relative",
    height: 480,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
    [theme.fn.smallerThan("sm")]: {
      marginTop: "0%",
      height: "auto",
      marginBottom: 48,
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "2rem",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `sans-serif`,
    fontSize: 28,
    lineHeight: 1.3,
    fontWeight: 400,
    letterSpacing: 3,
    textTransform: "uppercase",
    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  description: {
    maxWidth: "25ch",
    fontWeight: 500,
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  controls: {
    float: "right",
    position: "absolute",
    bottom: -10,
    right: 0,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const imageSet = [image12, image13, image14, image15, image16];

function Collection() {
  const { classes } = useStyles();
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [slide, setSlide] = useState(1);

  const scrollPrev = useCallback(() => {
    embla && embla.scrollPrev();
    setSlide((prev) => (prev - 1 == 0 ? 5 : prev - 1));
  }, [embla]);
  const scrollNext = useCallback(() => {
    embla && embla.scrollNext();
    setSlide((prev) => (prev + 1 == 6 ? 1 : prev + 1));
  }, [embla]);

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Now Available: the fall-winter collection 2022
            </Title>
            <Text mt="md" className={classes.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              officia ea aliquid culpa a maxime.
            </Text>

            <Group mt={30}>
              <Button size="lg" />
            </Group>

            <Group className={classes.controls}>
              <ActionIcon onClick={scrollPrev}>
                <IconChevronLeft size={18} />
              </ActionIcon>
              {slide}/5
              <ActionIcon onClick={scrollNext}>
                <IconChevronRight size={18} />
              </ActionIcon>
            </Group>
          </div>
          <SingleCarousel images={imageSet} setEmbla={setEmbla} />
        </div>
      </Container>
    </div>
  );
}

export { Collection };
