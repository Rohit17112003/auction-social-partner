import "./globals.css";
import "remixicon/fonts/remixicon.css";

export const metadata = {
  title: "Auction-social-partner",
  description: "Less Price Top Bidder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`text-gray-900`}>{children}</body>
    </html>
  );
}
