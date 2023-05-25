import { Link } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";

function ShoppingCart() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-6 mb-5  h-[50px] items-center mx-2 border-2 border-b-neutral-600-100">
        <div className="col-span-3 flex ">
          <input type="checkbox" className="mx-3 " />
          <h3>Sản Phẩm</h3>
        </div>
        <div className="hidden col-span-3  md:flex justify-around ">
          <h3>Đơn Giá </h3>
          <h3>Số Lượng </h3>
          <h3>Số Tiền </h3>
          <h3>Thao Tác</h3>
        </div>
      </div>
      {/* {shops.map((shops, index) =>{})} */}
      <div className="block md:grid grid-cols-8  mb-5   h-[90px] items-center mx-2 border-2 border-b-neutral-600-100">
        <div className="col-span-3 flex mt-5 md:col-span-4 md:mt-0 ">
          <input type="checkbox" className="mx-3 text-green-600" />

          <img
            src="https://cdnmedia.baotintuc.vn/Upload/pTMF1jgWpbjY1m8G1xWUsg/files/2020/03/banhmi/banh-mi-2403202%20(5).jpg"
            alt=""
            width="100px"
            height="100px"
          />
          <h3 className="ml-3 ">
            Găng tay da cảm ứng chống nước lót nỉ cực ấm
          </h3>
        </div>
        <div className="flex mt-3  col-span-5  md:flex justify-around md:col-span-4 ">
          <h3 id="đơn giá">Đơn Giá </h3>
          <h3 id="Số lượng ">Số Lượng </h3>
          <h3 id="Số tiền" className="hidden md:block">
            Số Tiền{" "}
          </h3>
          <button
            id=" Thao tác"
            className="bg-red-600 px-2 rounded-lg text-white"
          >
            Xóa
          </button>
        </div>
      </div>
      <div className="  fixed bottom-0 left-0  bg-cyan-400 w-screen p-2 flex justify-around md:justify-evenly">
        <div className=" ">
          <h1 className="p-1"> Voucher :</h1>

          <h1 className="p-1"> Tổng thanh Toán :{""}</h1>
        </div>
        <button className="bg-red-400 px-7 rounded-md">
          <Link to="/checkout">Đặt hàng </Link>
        </button>
      </div>
    </section>
  );
}

export default ShoppingCart;
