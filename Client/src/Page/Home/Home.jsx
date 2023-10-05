import { Banner } from "../../Components/Layout/Banner/Banner";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import Product from "../../Components/Layout/Banner/Product";
import Brand from "../../Components/Layout/Banner/Brand";
function Home() {
  return (
    <section className=" text-center bg-orange-200">
      <Header />
      <Banner />
      <figure className="mx-4 md:mx-5 lg:mx-[100px] xl:mx-[150px]">
        <h1 className="h1 font-bold text-red-500 relative top-[-30px]">
          DEAL NGON
        </h1>
        <Brand />
        <Product />
        <div className="flex justify-center my-3">
          <button className="btn hover:scale-110">LOAD MORE</button>
        </div>
      </figure>
      <Footer />
    </section>
  );
}

export default Home;
