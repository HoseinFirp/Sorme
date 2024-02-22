import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./pages/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product";
import DashPanel from "./pages/user pages/DashPanel";
import DashSidebar from "./pages/user pages/DashSidebar";
import DashNavbar from "./pages/DashNavbar";
import DashOrders from "./pages/user pages/DashOrders";
import DashFavorites from "./pages/user pages/DashFavorites";
import DashWallet from "./pages/user pages/DashWallet";
import DashSupport from "./pages/user pages/DashSupport";
import DashSettings from "./pages/user pages/DashSettings";
import DashUser from "./pages/user pages/DashUser";
import DashSeller from "./pages/user pages/DashSeller";
import DashFinancial from "./pages/user pages/DashFinancial";
import DashProduct from "./pages/user pages/DashProduct";
import SignInComp from "./pages/SignIn & Login/SignInComp";
import SignUpComp from "./pages/SignIn & Login/SignUpComp";
import ForgotComp from "./pages/SignIn & Login/ForgotComp";
import EnterCode from "./pages/SignIn & Login/EnterCode";
import NewPassComp from "./pages/SignIn & Login/NewPassComp";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import {
  updateAvatar,
  updateEmail,
  updateId,
  updateName,
  updatePosition,
  updateSupport,
  updateToken,
  useUser,
} from "./Slicers/userSlice";

function AppLayOut() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function DashboardLayout() {
  return (
    <div>
      <DashNavbar />
      <DashSidebar />
    </div>
  );
}
export const UserContext = React.createContext();

function App() {
  const user = useUser();
  const [path, setPath] = useState();
  const [date, setDate] = useState(dayjs("2020/05/05"));
  const [activeTickets, setActiveTickets] = useState();
  const [support, setSupport] = useState([]);
  const [pathForgot, setPathForgot] = useState();

  const value = {
    path,
    setPath,
    pathForgot,
    setPathForgot,
    date,
    setDate,
    activeTickets,
    setActiveTickets,
    support,
    setSupport,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (path) {
      localStorage.setItem("userPath", JSON.stringify(path));
    }
    const storedData = localStorage.getItem("userPath");
    if (storedData) {
      setPath(JSON.parse(storedData));
    }
  }, [path]);

  useEffect(() => {
    if (user.token) {
      const req = async () => {
        try {
          const { data } = await axios.get(
            `https://keykavoos-sorme.liara.run/user/get_Profile`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          dispatch(updateName(data.username));
          dispatch(updateEmail(data.email));
          dispatch(updateToken(data.token));
          dispatch(updateSupport(data.support));
          dispatch(updatePosition(data.position));
          dispatch(updateAvatar(data.avatar));
          dispatch(updateId(data._id));
        } catch (error) {
          // setIsLogin(false);
          console.log(error.response.data);
        }
      };
      req();
    }
  }, [user.token, dispatch, path]);
  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/product/:_id" element={<Product />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          {user.token?
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard-panel" element={<DashPanel />} />
            {path==="user"?<>
            <Route path="/dashboard-panel/orders" element={<DashOrders />} />
            <Route
              path="/dashboard-panel/favorites"
              element={<DashFavorites />}
              />
            <Route path="/dashboard-panel/wallet" element={<DashWallet />} />
              </>:<Route path="*" element={<PageNotFound />} />
            }
            {path==="user" || path==="admin"?

              <Route path="/dashboard-panel/support" element={<DashSupport />} />
            :<Route path="*" element={<PageNotFound />} />}
            <Route
              path="/dashboard-panel/settings"
              element={<DashSettings />}
            />
            {path==="admin"?<>
            <Route path="/dashboard-panel/users" element={<DashUser />} />
            <Route path="/dashboard-panel/sellers" element={<DashSeller />} />
            <Route
              path="/dashboard-panel/financial"
              element={<DashFinancial />}
              />
              </>:<Route path="*" element={<PageNotFound />} />
            }{path==="seller"?
            <Route path="/dashboard-panel/product" element={<DashProduct />} />:<Route path="*" element={<PageNotFound />} />}
          </Route>:<Route path="*" element={<PageNotFound />} />}
          <Route path="/login" element={<SignInComp />} />
          <Route path="/login-seller" element={<SignInComp />} />
          <Route path="/signup" element={<SignUpComp />} />
          <Route path="/signup-seller" element={<SignUpComp />} />
          {path || user.token ? (
            <>
              <Route path="/forgotpassword" element={<ForgotComp />} />
              <Route path="/forgotpassword-seller" element={<ForgotComp />} />
              <Route
                path="/forgotpassword/newpassword"
                element={<NewPassComp />}
              />
              <Route
                path="/forgotpassword/newpassword-seller"
                element={<NewPassComp />}
              />
              <Route path="/entercode" element={<EnterCode />} />
              <Route path="/entercode-seller" element={<EnterCode />} />
            </>
          ) : null}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
