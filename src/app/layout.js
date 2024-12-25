import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import TopCheat from "./components/TopCheat/TopCheat";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastContainer } from "react-toastify";

const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 600 700 900",
});

const inter = localFont({
  src: "./fonts/Inter/static/Inter_24pt-Regular.ttf",
  variable: "--font-inter",
  weight: "100 600 700 900",
});

export const metadata = {
  title: "Exclusive",
  description: "Ecommerce Website by Hasan Raza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased `}>
      <ToastContainer />
        <WishlistProvider>
          <CartProvider>
            <TopCheat />
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
