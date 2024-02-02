import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./pages/Footer";
import Shop from "./pages/Shop";
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
import CodeInput from "./pages/SignIn & Login/EnterCode";

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
    <div >
      <DashNavbar/>
      {/* {user.token? */}
      <DashSidebar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayOut />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard-panel" element={<DashPanel />} />
            <Route path="/dashboard-panel/orders" element={<DashOrders />} />
            <Route path="/dashboard-panel/favorites" element={<DashFavorites />} />
            <Route path="/dashboard-panel/wallet" element={<DashWallet />} />
            <Route path="/dashboard-panel/support" element={<DashSupport />} />
            <Route path="/dashboard-panel/settings" element={<DashSettings />} />
            <Route path="/dashboard-panel/user" element={<DashUser />} />
            <Route path="/dashboard-panel/seller" element={<DashSeller />} />
            <Route path="/dashboard-panel/financial" element={<DashFinancial />} />
            <Route path="/dashboard-panel/product" element={<DashProduct />} />
          </Route>
          <Route path="/signin" element={<SignInComp/>}/>
          <Route path="/signup" element={<SignUpComp/>}/>
          <Route path="/forgotpassword" element={<ForgotComp/>}/>
          <Route path="/entercode" element={<CodeInput/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
