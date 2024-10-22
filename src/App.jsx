
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import VendorLogin from './pages/vendor/VendorLogin'
import VendorSignup from './pages/vendor/VendorSignup'
import Discretion from './pages/discretion/Discretion'
import VendorPrivacy from './pages/privacyAgreement/VendorPrivacy'
import CustomerLogin from './pages/customer/CustomerLogin'
import CustomerSignup from './pages/customer/CustomerSignup'
import LandingPage from "./components/LandingPage";
import VendorLayouts from "./layouts/VendorLayout";
import VendorOverview from "./pages/dashboards/vendor-dashboard/VendorOverview";
import VendorPost from "./pages/dashboards/vendor-dashboard/VendorPost";
import VendorEdit from "./pages/dashboards/vendor-dashboard/VendorEdit";
import CustomerOverview from "./pages/customer/CustomerOverview";
import SingleAd from "./pages/customer/SingleAd";
import About from "./pages/about.jsx/About";
import CustomerDashboard from './layouts/CustomerLayout'



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
      ],
    },

    {

      path: '/discretion',
      element: <Discretion />

    },
    {
      path: '/vendor-Login',
      element: <VendorLogin />
    },
    {
      path: '/vendor-Signup',
      element: <VendorSignup />
    },
   
    {
      path: "/privacy",
      element: <VendorPrivacy />
    },
    {
      path:"/customer-Login",
      element:<CustomerLogin/>
    },
    
    {
      path:"/customer-Signup",
      element:<CustomerSignup/>,
    },
    {
      path: "/customer-dashboard",
      element: <CustomerDashboard/>,
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




  return <RouterProvider router={router} />;

}

export default App;
