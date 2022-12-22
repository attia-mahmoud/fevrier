import React, { useState } from "react";
import {
  ActionIcon,
  createStyles,
  Navbar as BaseComponent,
  Text,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    wrapper: {
      zIndex: 9999,
      position: "absolute",
      top: 0,
      height: "100vh",
      transform: "translateX(-150%)",
      transition: "all 350ms ease-in-out",
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      fontSize: 72,
      [theme.fn.smallerThan("xs")]: {
        fontSize: 54,
      },
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 700,
      fontFamily: "Bodoni Moda",
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors.brand[0],
      },
    },

    open: {
      transform: "translateX(0)",
    },

    closeIcon: {
      position: "absolute",
      right: "2rem",
    },
  };
});

const data = [
  { link: "", label: "Home" },
  { link: "", label: "Men" },
  { link: "", label: "Women" },
  { link: "", label: "Children" },
  { link: "", label: "Collections" },
];

function Navbar({ opened, onClose }: { opened: boolean; onClose: () => void }) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");
  const { height, width } = useViewportSize();

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <BaseComponent
      height={"100vh"}
      width={{ base: width }}
      p="md"
      className={cx(classes.wrapper, opened && classes.open)}
    >
      <ActionIcon onClick={onClose} className={classes.closeIcon}>
        <Text size={32} mt="3rem">
          X
        </Text>
      </ActionIcon>
      <BaseComponent.Section grow mt={"20%"}>
        {links}
      </BaseComponent.Section>
    </BaseComponent>
  );
}

export { Navbar };
