import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";

import ErrorA from "./pages/Error-400";
import ErrorB from "./pages/Error-401";
import ErrorC from "./pages/Error-403";
import ErrorPage from "./pages/ErrorPage";
import AddCustomers from "./pages/AddCustomers";
import AddOrders from "./pages/AddOrders";
import Users from "./pages/Users";
import AddUsers from "./pages/AddUsers";
import Testimonial from "./pages/guest/Testimonial";


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Guest = React.lazy(() => import("./pages/guest/Guest"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));

import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Routes utama dengan layout utama */}
        <Route element={<MainLayout />}>
          <Route path="/a" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomers />} />
          <Route path="/orders/add" element={<AddOrders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUsers />} />
          <Route path="/Error-400" element={<ErrorA />} />
          <Route path="/Error-401" element={<ErrorB />} />
          <Route path="/Error-403" element={<ErrorC />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="Testimonial" element={<Testimonial />} />
        </Route>


        {/* Layout Guest*/}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Guest />} />
        </Route>


        {/* Auth Layout untuk halaman login/register/forgot */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>


      </Routes>
    </Suspense>
  );
}

export default App;
