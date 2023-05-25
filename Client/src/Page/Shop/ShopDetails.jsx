import { FaCartPlus } from "react-icons/fa";
function ShopDetails() {
  return (
    <section>
      <nav className="grid grid-cols-3 gap-4 py-10 ">
        <div className="ml-3 w-[95%] md:flex col-span-2 gap-2 md:mr-5">
          <div className="flex md:block w-[20%] ">
            <img
              src="https://kiavietnam.com.vn/storage/kia-web-sportage-2.jpg"
              alt=""
              className="mb-1 rounded-md"
            />
            <img
              src="https://kiavietnam.com.vn/storage/kia-web-sportage-2.jpg"
              alt=""
              className="mb-1 rounded-md"
            />
            <img
              src="https://kiavietnam.com.vn/storage/kia-web-sportage-2.jpg"
              alt=""
              className="mb-1 rounded-md"
            />
            <img
              src="https://kiavietnam.com.vn/storage/kia-web-sportage-2.jpg"
              alt=""
              className="mb-1 rounded-md"
            />
            <img
              src="https://kiavietnam.com.vn/storage/kia-web-sportage-2.jpg"
              alt=""
              className="mb-1 rounded-md"
            />
          </div>
          <img
            src="https://kiavietnam.com.vn/storage/kia-web-sportage-2.jpg"
            alt=""
            className="h-[90%] w-full md:max-w-[75%] md:h-full rounded-lg"
          />
        </div>
        <article className="col-span-1">
          <h1 className="text-3xl">KIA SEN</h1>
          <h3 className="my-2"> Thông tin </h3>
          <h3 className="my-4">Giá</h3>
          <button className=" flex justify-center items-center w-[80%] bg-red-500   py-2 px-2 rounded-xl  font-semibold  hover:bg-primary hover:text-white ">
            Add to Cart <FaCartPlus className="ml-2" />{" "}
          </button>
        </article>
      </nav>
      <aside>
        
      </aside>
    </section>
  );
}

export default ShopDetails;
