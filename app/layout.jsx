import "./globals.css";

export const metadata = {
  title: "Marwan | Portfolio",
  description: "Minimal black portfolio homepage built with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}