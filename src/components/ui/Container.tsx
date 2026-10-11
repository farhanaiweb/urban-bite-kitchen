import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const maxWidths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[80rem]",
  full: "max-full",
};

export function Container({
  children,
  className = "",
  maxWidth = "xl",
}: ContainerProps) {
  return (
    <div className={`mx-auto px-6 ${maxWidths[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}