import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterRoute from "./routes/RegisterRoute";
import LoginRoute from "./routes/LoginRoute";
import UserProvider from "./context/UserProvider";
import ProfileRoute from "./routes/ProfileRoute";
import ProductRoutes from "./routes/ProductsRoute";
import CartRoute from "./routes/CartRoute";
import IndexRoute from "./routes/IndexRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<IndexRoute />} />
            <Route path="register" element={<RegisterRoute />} />
            <Route path="login" element={<LoginRoute />} />
            <Route path="profile" element={<ProfileRoute />} />
            <Route path="products" element={<ProductRoutes />} />
            <Route path="cart" element={<CartRoute />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
