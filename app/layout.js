import "./globals.css";

export const metadata = {
  title: "Shahrukh | Next.js & Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in Next.js, React, PostgreSQL, Prisma, and Tailwind CSS. Building modern, scalable, and high-performance web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
