import { Outlet, useLocation, useNavigate } from "react-router-dom";

import dashboard from "../../images/dashboard.png";
import orders from "../../images/orders.png";
import favorites from "../../images/favorites.png";
import wallet from "../../images/wallet.png";
import support from "../../images/support.png";
import settings from "../../images/setting.png";
import pinkObj from "../../images/pinkObj.png";
import sellerIcon from "../../images/sellerIcon.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import userPic from "../../images/userpic.png"
import { useUser } from "../../Slicers/userSlice";

function DashSidebar() {
  const [panel, setPanel] = useState("dashboardPanel");
  const user = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(17) === "") {
      setPanel("dashboardPanel");
    } else if (location.pathname.slice(17) === "users") {
      setPanel("userPanel");
    } else if (location.pathname.slice(17) === "sellers") {
      setPanel("sellerPanel");
    } else if (location.pathname.slice(17) === "orders") {
      setPanel("ordersPanel");
    } else if (location.pathname.slice(17) === "favorites") {
      setPanel("favoritesPanel");
    } else if (location.pathname.slice(17) === "wallet") {
      setPanel("walletPanel");
    } else if (location.pathname.slice(17) === "financial") {
      setPanel("financialPanel");
    } else if (location.pathname.slice(17) === "support") {
      setPanel("supportPanel");
    } else if (location.pathname.slice(17) === "product") {
      setPanel("productPanel");
    } else if (location.pathname.slice(17) === "settings") {
      setPanel("settingsPanel");
    }
  }, [location.pathname, user.panel]);
  const { path } = useContext(UserContext);
  return (
    <div className="drawer shadow-slate-300 shadow-inner bg-white lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex h-screen flex-col  items-center justify-center">
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        <Outlet />
      </div>
      <div className="  shadow-inner shadow-gray-300">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex gap-4  flex-col my-4 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src={
                  user.avatar[0]?.path
                    ? user.avatar[0].path
                    : `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`
                }
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center ">
            <p className="text-gray-700 font-bold">
              {user.username.toUpperCase()}
            </p>
            <p className="text-xs">{user.email}</p>
          </div>
        </div>
        <ul className="menu gap-4 px-2 mx-5 pl-0 rounded-xl  shadow-inner shadow-slate-400 p-4 w-64   text-base-content">
          {/* Sidebar content here */}
          <li
            onClick={() => {
              navigate("/dashboard-panel");
              setPanel("dashboardPanel");
            }}
            className="w-58"
          >
            <div className="flex gap-5 ml-0 py-0 pl-0">
              <div className="w-12 ">
                {panel === "dashboardPanel" ? (
                  <img src={pinkObj} className="h-12" />
                ) : (
                  <div className="h-12"></div>
                )}
              </div>
              <img src={dashboard} className="w-8" />
              <p
                className={
                  panel === "dashboardPanel"
                    ? "text-pink-300 font-bold"
                    : "text-gray-700 font-bold"
                }
              >
                Dashboard
              </p>
            </div>
          </li>
          {/* for Manager */}
          {path !== "user" && path !== "seller" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/users");
                setPanel("userPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "userPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={userPic} className="w-8" />{" "}
                <p
                  className={
                    panel === "userPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Users
                </p>
              </div>
            </li>
          ) : null}
          {path !== "user" && path !== "seller" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/sellers");
                setPanel("sellerPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "sellerPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={sellerIcon} className="w-8" />{" "}
                <p
                  className={
                    panel === "sellerPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Sellers
                </p>
              </div>
            </li>
          ) : null}
          {path === "user" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/orders");
                setPanel("ordersPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "ordersPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={orders} className="w-8" />{" "}
                <p
                  className={
                    panel === "ordersPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Orders
                </p>
              </div>
            </li>
          ) : null}
          {path === "user" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/favorites");
                setPanel("favoritesPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "favoritesPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={favorites} className="w-8" />{" "}
                <p
                  className={
                    panel === "favoritesPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Favorites
                </p>
              </div>
            </li>
          ) : null}
          {path === "user" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/wallet");
                setPanel("walletPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "walletPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={wallet} className="w-8" />{" "}
                <p
                  className={
                    panel === "walletPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Wallet
                </p>
              </div>
            </li>
          ) : null}
          {path !== "user" && path !== "seller" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/financial");
                setPanel("financialPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "financialPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={wallet} className="w-8" />{" "}
                <p
                  className={
                    panel === "financialPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Financial
                </p>
              </div>
            </li>
          ) : null}
          {path !== "seller" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/support");
                setPanel("supportPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "supportPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={support} className="w-8" />{" "}
                <p
                  className={
                    panel === "supportPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Support
                </p>
              </div>
            </li>
          ) : null}
          {path === "seller" ? (
            <li
              onClick={() => {
                navigate("/dashboard-panel/product");
                setPanel("productPanel");
              }}
              className="w-58"
            >
              <div className="flex gap-5 ml-0 py-0 pl-0">
                <div className="w-12">
                  {panel === "productPanel" ? (
                    <img src={pinkObj} className="h-12" />
                  ) : (
                    <div className="h-12"></div>
                  )}
                </div>
                <img src={sellerIcon} className="w-8" />{" "}
                <p
                  className={
                    panel === "productPanel"
                      ? "text-pink-300 font-bold"
                      : "text-gray-700 font-bold"
                  }
                >
                  Product
                </p>
              </div>
            </li>
          ) : null}
          <li
            onClick={() => {
              navigate("/dashboard-panel/settings");
              setPanel("settingsPanel");
            }}
            className="w-58"
          >
            <div className="flex gap-5 ml-0 py-0 pl-0">
              <div className="w-12">
                {panel === "settingsPanel" ? (
                  <img src={pinkObj} className="h-12" />
                ) : (
                  <div className="h-12"></div>
                )}
              </div>
              <img src={settings} className="w-8" />{" "}
              <p
                className={
                  panel === "settingsPanel"
                    ? "text-pink-300 font-bold"
                    : "text-gray-700 font-bold"
                }
              >
                Settings
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashSidebar;
