import { BiTime } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { Banner } from "../../Components/Layout/Banner/Banner";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
function Home() {
  const datas = [
    {
      img: "https://cdnmedia.baotintuc.vn/2016/04/28/16/07/Poster-Captan-America.jpg",
      title: "Poster Cap",
      discripton: "mavel",
      time: 120,
    },
    {
      img: "https://images2.thanhnien.vn/Uploaded/nhuvnq/2022_11_08/chi-chi-em-em-2-1st-look-poster-kc-220120223-6428.jpg",
      title: "Poster Cap",
      discripton: "mavel",
      time: 120,
    },
    {
      img: "https://media.doisongphapluat.com/media/dang-nhat-duy/2022/12/03/poster-phim-tran-thanh-nha-ba-nu-dspl-31220221.jpg",
      title: "Poster Cap",
      discripton: "mavel",
      time: 120,
    },
    {
      img: "https://huenews.net/wp-content/uploads/2019/12/chinh-anh-mat-biec-04.jpeg",
      title: "Poster Cap",
      discripton: "mavel",
      time: 120,
    },
    {
      img: "https://cdnmedia.baotintuc.vn/2016/04/28/16/07/Poster-Captan-America.jpg",
      title: "Poster Cap",
      discripton: "mavel",
      time: 120,
    },
  ];
  return (
    <section className=" text-center bg-orange-200">
      <Header />
      <Banner />

      <h1 className="h1 font-bold text-red-500 relative top-[-30px]">
        DEAL NGON
      </h1>
      <article className="  grid grid-cols-2 gap-x-2 gap-y-2 mx-4 text-center md:mx-5  md:grid-cols-3 md:gap-x-5 md:gap-y-5  lg:grid-cols-4 lg:mx-[100px] xl:grid-cols-5 xl:mx-[150px]   ">
        {datas.map((data, index) => (
          <aside
            className="col-span-1  bg-primary rounded-md shadow-md relative overflow-hidden hover:shadow-cyan-500 hover:shadow-lg  max-w-[240px]"
            key={index}
          >
            <img
              src={data.img}
              alt=""
              loading="lazy"
              className="  w-full h-[200px] md:h-[250px] hover:-translate-y-3"
            />
            <div className=" flex justify-between p-3 text-white ">
              <span>
                <h4>{data.title}</h4>
                <p>{data.discripton}</p>
              </span>
              <button>
                <FaCartPlus />
              </button>
            </div>
            <div className=" justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 p-2 min-w-[25%]">
              <h6 className="flex">
                <BiTime />
                {data.time}m
              </h6>
            </div>
          </aside>
        ))}
      </article>
      <div className="flex justify-center">
        <button className="btn hover:scale-110">LOAD MORE</button>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
