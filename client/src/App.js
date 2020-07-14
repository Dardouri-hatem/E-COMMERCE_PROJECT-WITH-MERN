import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/header"
import HomeScreen from "./components/HomeScreen1";
import ProductScreen from "./components/ProductScreen1";
import CartScreen from "./components/CartScreen";
import SigninScreen from "./components/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./components/RegisterScreen";
import ProductsScreen from "./components/ProductsScreen";
import ShippingScreen from "./components/ShippingScreen";
import PaymentScreen from "./components/PaymentScreen";
import PlaceOrderScreen from "./components/PlaceOrderScreen";
import OrderScreen from "./components/OrderScreen";
import ProfileScreen from "./components/ProfileScreen";
import OrdersScreen from "./components/OrdersScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header/>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
