import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/AppContextProvider.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import ProductsContextProvider from "./context/ProductsContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
