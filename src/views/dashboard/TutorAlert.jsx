"use client";
import React from "react";
import { Alert } from "@heroui/react";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

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
    }, [color]);

    return (
      <Alert
        ref={ref}
        isClosable={true}
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
  const { push } = useRouter();

  return (
    <div className="flex flex-col w-full gap-y-6 mb-14">
      {colors.map((color) => (
        <CustomAlert
          key={color}
          color={color}
          title="You have successfully created your account! Apply for tutor now."
        >
          <div className="flex items-center gap-1 mt-3">
            <PrimaryButton
              className="bg-background text-default-700 font-medium border-1 shadow-small"
              size="md"
              variant="bordered"
              endContent={<IoMdArrowForward size={18} />}
              onPress={()=> push('/dashboard/tutor-profile')}
            >
              Become a Tutor
            </PrimaryButton>
          </div>
        </CustomAlert>
      ))}
    </div>
  );
}

