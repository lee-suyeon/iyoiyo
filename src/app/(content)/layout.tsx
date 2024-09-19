import Navigation from "@/components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full px-4 pt-5">
        {children}
        <Navigation />
      </body>
    </html>
  );
}
