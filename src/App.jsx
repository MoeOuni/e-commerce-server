import { ConfigProvider } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BackOfficeLayout from "./layouts/BackOfficeLayout";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <ConfigProvider>
      <Routes>
        <Route path="/" element={<BackOfficeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
