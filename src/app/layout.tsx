import type { Metadata } from "next";
import "./globals.css";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { Toaster } from "react-hot-toast";
// import { GlobalProvider } from "@/context/GlobalContext";
import { Raleway } from "next/font/google";
import local from "next/font/local";
// import { Layout } from "@/components/Layout/Layout";

const vallejo = local({
  display: "swap",
  src: [
    {
      path: "./fonts/Vallejo-Regular.ttf",
      weight: "400"
    }
  ],
  variable: "--font-vallejo"
});

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-raleway",
  subsets: ["latin"]
});

// TODO - ADD META DATA
export const metadata: Metadata = {
  title: "Ai meme coin",
  description: "A cool meme coin"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vallejo.variable} ${raleway.variable}  ${raleway.className} font-raleway  bg-black text-white min-h-screen  antialiased  overflow-x-hidden leading-[1]`}
      >
        {/* // TODO NO. 3 - ADD FAVICON (favicon.png) TO PUBLIC FOLDER */}
        <link rel="icon" href="/logo.png" />

        {children}
      </body>
    </html>
  );
}
