import Blog from "../Page/Blog/Blog";
import CheckOut from "../Page/Shop/CheckOut";
import ShopDetails from "../Page/Shop/ShopDetails";

const publicRouter = [
  // { path: "/", pages: Home },
  { path: "/blog", pages: Blog },
  { path: "/CheckOut", pages: CheckOut },
  { path: "/ShopDetails", pages: ShopDetails },
];
const privateRouter = [];

export { publicRouter, privateRouter };
