import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  ActionIcon,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { SingleCarousel } from "../Carousel";
import { useCallback, useState } from "react";
import { Embla } from "@mantine/carousel";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 4,
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
    fontFamily: "Bodoni Moda, serif",
    fontSize: 95,
    lineHeight: 1.2,
    fontWeight: 400,
    zIndex: 9998,
    [theme.fn.smallerThan("xs")]: {
      // fontSize: 28,
      textAlign: "center",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
    borderColor: "black",
    borderRadius: "50%",
    width: "8.5rem",
  },

  button: {
    border: "1px solid black",
    borderRadius: "50%",
    padding: "2.5rem 0.7rem",
    width: "8.5rem",
    [theme.fn.smallerThan("sm")]: {
      margin: "0 auto",
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

  image: {
    position: "absolute",
    zIndex: -1,
    right: 0,
    flex: 1,
    height: "30rem",
    width: "35rem",
    objectFit: "cover",
    objectPosition: "50% 10%",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  subtitle: {
    textTransform: "uppercase",
  },

  line: {
    width: "8rem",
    height: "3px",
    marginInline: "1rem",
    marginBlock: "3px",
    backgroundColor: theme.colors.gray[7],
    display: "inline-block",
  },
}));

function Hero() {
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
            <Text mt="md" weight={700} className={classes.subtitle} size="sm">
              View the runway <div className={classes.line}></div>
            </Text>
            <Title className={classes.title}>Spring 2022</Title>

            <Group mt={30} className={classes.button} position="center">
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Shop Now &gt;
              </Button>
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
          <SingleCarousel setEmbla={setEmbla} />
        </div>
      </Container>
    </div>
  );
}

export { Hero };
