import { Button } from "@heroui/react";

const PrimaryButton = ({
  children,
  color = "primary",
  className = "",
  ...props
}) => {
  return (
    <>
      <Button
        {...props}
        className={`${className}`}
        size="sm"
        color={color}
        radius="sm"
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;