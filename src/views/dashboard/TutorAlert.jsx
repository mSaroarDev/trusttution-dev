import React from "react";
import { Alert, Button } from "@heroui/react";
import { cn } from "@/lib/utils";

const CustomAlert = React.forwardRef(
  (
    { title, children, variant = "faded", color = "secondary", className, classNames = {}, ...props },
    ref,
  ) => {
    const colorClass = React.useMemo(() => {
      switch (color) {
        case "success":
          return "before:bg-success";
        default:
          return "before:bg-default-200";
      }
    }, []);

    return (
      <Alert
        ref={ref}
        classNames={{
          ...classNames,
          base: cn(
            [
              "bg-default-50 dark:bg-background shadow-sm",
              "border-1 border-default-200 dark:border-default-100",
              "relative before:content-[''] before:absolute before:z-10",
              "before:left-0 before:top-[-1px] before:bottom-[-1px] before:w-1",
              "rounded-l-none border-l-0",
              colorClass,
            ],
            classNames.base,
            className,
          ),
          mainWrapper: cn("pt-1", classNames.mainWrapper),
          iconWrapper: cn("dark:bg-transparent", classNames.iconWrapper),
        }}
        color={color}
        title={title}
        variant={variant}
        {...props}
      >
        {children}
      </Alert>
    );
  },
);

CustomAlert.displayName = "CustomAlert";

export default function TutorAlert() {
  const colors = ["success"];

  return (
    <div className="flex flex-col w-full gap-y-6 mb-14">
      {colors.map((color) => (
        <CustomAlert
          key={color}
          color={color}
          title="You have successfully created your account! Apply for tutor now."
        >
          <div className="flex items-center gap-1 mt-3">
            <Button
              className="bg-background text-default-700 font-medium border-1 shadow-small"
              size="sm"
              variant="bordered"
            >
              Become a Tutor
            </Button>
            <Button
              className="text-default-500 font-medium underline underline-offset-4"
              size="sm"
              variant="light"
            >
              Maybe later
            </Button>
          </div>
        </CustomAlert>
      ))}
    </div>
  );
}

