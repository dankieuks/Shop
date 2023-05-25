import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRouter } from "./Router/Router";
import { DefaultLayout } from "./Components/Layout";
import ShopCart from "./Page/Shop/ShopCart";

import Home from "./Page/Home/Home";
import Index from "./Components/Auth";

function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.pages;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        <Route path="/" element={<Home />} />
        <Route path="/shopcart" element={<ShopCart />} />

        <Route path="/register" element={<Index />} />
        <Route path="/login" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
