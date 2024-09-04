interface ButtonProps {
  primary?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  children,
  fullWidth,
  primary = true,
}: ButtonProps) {
  const buttonWidth = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${
        primary ? "bg-blue-950" : "bg-blue-200"
      } text-white py-3 px-4 rounded-full ${buttonWidth}`}
    >
      {children}
    </button>
  );
}
