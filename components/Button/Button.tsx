import { Button as BaseComponent } from "@mantine/core";

const Button = ({ size = "sm" }) => {
  return (
    <BaseComponent variant="outline" color="dark" radius="xs" size={size}>
      Shop Now
    </BaseComponent>
  );
};

export { Button };
