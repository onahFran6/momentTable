import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@components/footer";
import Navbar from "@components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MomentTable",
  description: "Generated Moment Distribution Table",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen  p-2">
        <Navbar /> {children}
        <Footer />
      </body>
    </html>
  );
}
