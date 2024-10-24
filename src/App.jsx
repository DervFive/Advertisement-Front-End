

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import VendorLogin from './pages/vendor/VendorLogin'
import VendorSignup from './pages/vendor/VendorSignup'
import Discretion from './pages/discretion/Discretion'
import VendorPrivacy from './pages/privacyAgreement/VendorPrivacy'
import LandingPage from "./components/LandingPage";
import VendorLayouts from "./layouts/VendorLayout";
import VendorOverview from "./pages/dashboards/vendor-dashboard/VendorOverview";
import VendorPost from "./pages/dashboards/vendor-dashboard/VendorPost";
import VendorEdit from "./pages/dashboards/vendor-dashboard/VendorEdit";
import CustomerOverview from "./pages/customer/CustomerOverview";
import SingleAd from "./pages/customer/SingleAd";
import About from "./pages/about.jsx/About";
import CustomerDashboard from "./layouts/CustomerLayout";
import VendorAdAll from "./pages/dashboards/vendor-dashboard/vendorProducts/VendorAdAll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorProfile from './pages/vendor/VendorProfile'
import SingleAdVendor from './pages/vendor/SingleAddVendor'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/vendor-dashboard",
      element: <VendorLayouts />,
      children: [
        {
          index: true,
          element: <VendorOverview />,
        },
        {
          path: "add-AD",
          element: <VendorPost />,
        },
        {
          path: "edit-AD",
          element: <VendorEdit />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "vendor-ADs",
          element: <VendorAdAll />,
        },
      ],
    },

    {
      path: '/discretion',
      element: <Discretion />
    },
    {
      path: "/vendor-Login",
      element: <VendorLogin />,
    },
    {
      path: "/vendor-Signup",
      element: <VendorSignup />,
    },
    {
      path:"/vendor-profile",
      element: <VendorProfile/>
    },
    {
      path: "/SingleAd-Vendor",
      element: <SingleAdVendor/>
    },
    {
      path: "/privacy",
      element: <VendorPrivacy />
    },
    {
      path: "/customer-dashboard",
      element: <CustomerDashboard />,
      children: [
        {
          index: true,
          element: <CustomerOverview />,
        },
        {
          path: "single-AD",
          element: <SingleAd />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );


export default App;
