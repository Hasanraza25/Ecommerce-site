import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sales from "./components/Sales/Sales";
import Category from "./components/Category/Category";
import BestSellProducts from "./components/Products/BestSellProducts";
import Music from "./components/Music/Music";
import AllProducts from "./components/Products/AllProducts";
import Featured from "./components/Featured/Featured";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Sales />
      <Category />
      <BestSellProducts />
      <Music />
      <AllProducts />
      <Featured />
      <Services />
    </>
  );
}
