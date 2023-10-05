import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Banner() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeeds: 1000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <nav className="bg-cyan-100">
      <img
        className=" md:    lg:h-[550px] w-[100%] "
        src="https://kiavietnam.com.vn/storage/kv-ctbh-thang-5-banner-web.png"
        alt=""
      />

      <Slider
        {...settings}
        className="relative top-[-30px] mx-7  md:mx-20 md:top-[-75px]  lg:mx-24 lg:top-[-88px] "
      >
        {bannerData.map((banner, index) => (
          <div
            className=" bottom-[-100px] px-[2px]  h-[90px] md:h-[150px]   lg:h-[170px] md:px-1 "
            key={index}
          >
            <img
              src={banner.img}
              alt=""
              className="w-full  h-full rounded-2xl  hover:border-cyan-300"
            />
          </div>
        ))}
      </Slider>
    </nav>
  );
}
