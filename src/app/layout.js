import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "../components/ToastProvider/ToastProvider";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FriendsProvider from "@/context/FriendsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Friendship tracker",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FriendsProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <ToastProvider></ToastProvider>
        </FriendsProvider>
      </body>
    </html>
  );
}
