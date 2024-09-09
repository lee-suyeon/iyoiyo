import Header from "@/components/Header";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="Sign Up" />
      {children}
    </>
  );
}
