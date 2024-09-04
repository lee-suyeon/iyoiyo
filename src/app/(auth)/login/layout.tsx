import Header from "@/components/Header";

export default function LogInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="Log In" />
      {children}
    </>
  );
}
