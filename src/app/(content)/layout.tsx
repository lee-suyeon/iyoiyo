import Navigation from "@/components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-4 mt-5">
        {children}
        <Navigation />
      </body>
    </html>
  );
}
