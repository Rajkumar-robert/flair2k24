import { Space_Grotesk } from "@next/font/google";
import { Anton, Oswald } from "@next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>
        {/* Apply Space Grotesk only to Navbar */}
        <Navbar className={space_grotesk.className} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
