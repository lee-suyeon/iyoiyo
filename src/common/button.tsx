import classes from "./button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  fullWidth,
  className,
  onClick,
  variant = "secondary",
}: ButtonProps) {
  return (
    <button
      className={`${classes.button} ${classes[variant]} ${
        fullWidth ? classes.fullWidth : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
