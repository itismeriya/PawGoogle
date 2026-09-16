import "./globals.css";

export const metadata = {
  title: "pawGoogle | Everything Your Pet Deserves",
  description:
    "A modern pet shop for food, toys, accessories and everyday pet essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}