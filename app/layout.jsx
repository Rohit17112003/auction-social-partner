import "./globals.css";
import { Urbanist } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Auction-social-partner",
  description: "Less Price Top Bidder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${urbanist.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
