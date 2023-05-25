import Header from "./Header/Header";
import Footer from "./Footer/Footer";

/* eslint-disable react/prop-types */
function DefaultLayout({ children }) {
  return (
    <div className=" gird grid-cols-6  ">
      <Header />
      <main className="col-span-6 pb-6 mx-0 bg-cyan-100 md:mx-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
