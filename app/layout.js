import "./globals.css";

export const metadata = {
  title: "Portfolio | Shahrukh",
  description: "web developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
