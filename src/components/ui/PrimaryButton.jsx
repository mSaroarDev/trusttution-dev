"use client";
import { Button } from "@heroui/react";

const PrimaryButton = ({
  children,
  color = "primary",
  className = "",
  size = "md",
  ...props
}) => {
  return (
    <>
      <Button
        {...props}
        className={`${className}`}
        size={size}
        color={color}
        radius="sm"
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;