import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "on-dark";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
}

type ButtonButtonProps = BaseButtonProps & {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

type ButtonAnchorProps = BaseButtonProps & {
  as?: "a";
  href: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
};

type ButtonProps = ButtonButtonProps | ButtonAnchorProps;

const variantClasses = {
  primary:
    "bg-deep-red text-cream-surface hover:bg-deep-red-dark focus-visible:ring-deep-red",
  secondary:
    "border-2 border-deep-red text-deep-red hover:bg-deep-red/10 focus-visible:ring-deep-red",
  "on-dark":
    "bg-cream-surface text-black hover:bg-cream-surface/90 focus-visible:ring-cream-surface",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed";

const LoadingSpinner = () => (
  <>
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    Loading...
  </>
);

function ButtonAnchor(props: ButtonAnchorProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    disabled = false,
    loading = false,
    href,
    onClick,
  } = props;

  const combinedClassName = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      role="button"
      className={combinedClassName}
      tabIndex={disabled || loading ? -1 : 0}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading ? <LoadingSpinner /> : children}
    </a>
  );
}

const ButtonButton = forwardRef<HTMLButtonElement, ButtonButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      disabled = false,
      loading = false,
      type = "button",
      onClick,
    },
    ref
  ) => {
    const combinedClassName = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && "w-full",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClassName}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        onClick={onClick}
      >
        {loading ? <LoadingSpinner /> : children}
      </button>
    );
  }
);

ButtonButton.displayName = "ButtonButton";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { as, href, ...rest },
    ref
  ) => {
    const isLink = as === "a" || href !== undefined;

    if (isLink) {
      return <ButtonAnchor {...(rest as ButtonAnchorProps)} href={href!} />;
    }
    return <ButtonButton {...(rest as ButtonButtonProps)} ref={ref} />;
  }
);

Button.displayName = "Button";

export { Button };