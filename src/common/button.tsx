interface ButtonProps {
  primary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  children,
  fullWidth,
  onClick,
  primary = true,
}: ButtonProps) {
  const buttonWidth = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${
        primary ? "bg-blue-950" : "bg-blue-200"
      } text-white py-3 px-4 rounded-full ${buttonWidth}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
