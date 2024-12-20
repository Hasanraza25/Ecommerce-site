import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import TopCheat from "./components/TopCheat/TopCheat";
import Footer from "./components/Footer/Footer";

const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 600 700 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Exclusive",
  description: "Ecommerce Website by Hasan Raza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <TopCheat />

          <Header />
     

        {children}
        <Footer />
      </body>
    </html>
  );
}
