import { Button as BaseComponent } from "@mantine/core";

const Button = (props: any) => {
  return (
    <BaseComponent
      variant="outline"
      color="dark"
      radius="xs"
      size="sm"
      {...props}
    >
      Shop Now
    </BaseComponent>
  );
};

export { Button };
