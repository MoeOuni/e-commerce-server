import React, { useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
