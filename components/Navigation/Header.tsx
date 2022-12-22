import { useState } from "react";
import {
  createStyles,
  Header as BaseComponent,
  Container,
  Group,
  Burger,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingCart } from "@tabler/icons";
import { Navbar } from "./Navbar";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    borderBottom: `1px solid ${theme.colors.gray[5]}`,
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  cart: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.brand[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.brand[0],
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

const links = [
  {
    link: "/about",
    label: "Home",
  },
  {
    link: "/pricing",
    label: "Men",
  },
  {
    link: "/learn",
    label: "Women",
  },
  {
    link: "/community",
    label: "Children",
  },
  {
    link: "/collections",
    label: "Collections",
  },
];

function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <BaseComponent height={80} mb={0} sx={{ borderBottom: 0 }}>
        <Container className={classes.header}>
          <Title weight="400">Fevrier</Title>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <IconShoppingCart size={18} className={classes.cart} />
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Container>
      </BaseComponent>
      <Navbar opened={opened} onClose={toggle} />
    </>
  );
}

export { Header };
