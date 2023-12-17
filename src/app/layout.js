import "material-icons/iconfont/material-icons.css"; // https://marella.me/material-icons/demo/
import "./globals.css";
import Header from "@/components/Header";
import Tempmenu from "@/components/Tempmenu";
import Footer from "@/components/Footer";
import { Orbitron, Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"], variable: "--font-open" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-mainBG ${orbitron.variable} ${open_sans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
