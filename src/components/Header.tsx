import "@/styles/globals.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="font-semibold text-center text-3xl py-4 font-en font-bold">
      <h1>{title}</h1>
    </header>
  );
}
