import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  id?: string;
}

const paddingClasses = {
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-36",
};

export function Section({
  children,
  className = "",
  size = "md",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${paddingClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}