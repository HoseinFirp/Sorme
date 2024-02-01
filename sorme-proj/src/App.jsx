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
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
