import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiTime } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
function Product() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeeds: 3000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const products = [];

  return (
    <nav>
      <Slider {...settings}>
        <article className="  grid grid-cols-2 gap-x-2 gap-y-2 mx-4 text-center md:mx-5  md:grid-cols-3 md:gap-x-5 md:gap-y-5  lg:grid-cols-4 lg:mx-[100px] xl:grid-cols-5 xl:mx-[150px]   ">
          {products.map((product, index) => (
            <aside
              className="col-span-1  bg-primary rounded-md shadow-md relative overflow-hidden hover:shadow-cyan-500 hover:shadow-lg  max-w-[240px]"
              key={index}
            >
              <img
                src={product.img}
                alt=""
                loading="lazy"
                className="  w-full h-[200px] md:h-[250px] hover:-translate-y-3"
              />
              <div className=" flex justify-between p-3 text-white ">
                <span>
                  <h4>{product.title}</h4>
                  <p>{product.discripton}</p>
                </span>
                <button>
                  <FaCartPlus />
                </button>
              </div>
              <div className=" justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 p-2 min-w-[25%]">
                <h6 className="flex">
                  <BiTime />
                  {product.time}m
                </h6>
              </div>
            </aside>
          ))}
        </article>
      </Slider>
      ;
    </nav>
  );
}

export default Product;
