"use client";
import { HeroUIProvider } from "@heroui/react";

const UIProvider = ({ children }) => {
  return (
    <>
      <HeroUIProvider>{children}</HeroUIProvider>
    </>
  );
};

export default UIProvider;