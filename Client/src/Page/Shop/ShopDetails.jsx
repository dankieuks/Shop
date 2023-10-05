import { FaCartPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShopDetails() {
  const bannerData = [
    {
      img: "https://kiavietnam.com.vn/storage/kia-k3-uu-dai-kv-01-1.jpg",
    },
    {
      img: "https://kiavietnam.com.vn/storage/kia-sorento-tinh-nang-moi-kv-new-01.jpg",
    },
    {
      img: "https://vinfastotovinh.vn/wp-content/uploads/2020/09/uu-dai-37-trieu_ok.png",
    },
    {
      img: "https://binhduongngoisao.vn/application/upload/new/1130x300_4xe.jpg",
    },
    {
      img: "https://binhduongngoisao.vn/application/upload/new/1920x600.jpeg",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeeds: 1000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="">
      <nav className="grid grid-cols-2 gap-4 py-10 ">
        <div className="px-4 w-[95%] md:px-7 md:ml-3  ">
          <Slider {...settings} className=" ">
            {bannerData.map((banner, index) => (
              <div className=" " key={index}>
                <img
                  src={banner.img}
                  alt=""
                  className="w-full  h-[350px] rounded-2xl  hover:border-cyan-300"
                />
              </div>
            ))}
          </Slider>
        </div>
        <article className="col-span-1 md:px-9">
          <h1 className="text-3xl">KIA SEN</h1>

          <h3 className="my-4">Giá</h3>
          <h3>
            Color <span> </span>
          </h3>
          <h3 className="my-4">Số lượng </h3>
          <button className=" flex justify-center items-center w-[80%] bg-red-500   py-2 px-2 rounded-xl  font-semibold  hover:bg-primary hover:text-white ">
            Add to Cart <FaCartPlus className="ml-2" />{" "}
          </button>
        </article>
      </nav>
      <hr className="w-full h-[30px] bg-slate-50" />
      <nav className="w-full bg-red-600">
        <h2 className="h2">Thông số sản phẩm</h2>
      </nav>
      <aside></aside>
    </section>
  );
}

export default ShopDetails;
