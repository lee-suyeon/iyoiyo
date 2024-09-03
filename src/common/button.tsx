interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

export default function Button({ children, primary = true }: ButtonProps) {
  return (
    <button
      className={`${
        primary ? "bg-blue-950" : "bg-blue-200"
      } text-white py-3 px-4 rounded-full min-w-80 text-sm`}
    >
      {children}
    </button>
  );
}
