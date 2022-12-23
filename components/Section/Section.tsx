import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import { Button } from "../Button";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 2,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  title: {
    fontFamily: `Bodoni Moda, sans-serif`,
    fontWeight: 400,
    letterSpacing: 3,
    textTransform: "uppercase",
    fontSize: 28,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },
  },

  description: {
    [theme.fn.smallerThan("sm")]: {},
  },
}));

const Section = ({ title }: { title: string }) => {
  const { classes, theme } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={700} p={0}>
        <Text size="md" className={classes.description} weight={600}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          enim. Lorem ipsum dolor.
        </Text>
      </Container>
      <Button />
    </Container>
  );
};

export { Section };
