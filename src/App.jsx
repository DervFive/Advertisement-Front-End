import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import VendorLayouts from "./layouts/VendorLayout";
import VendorOverview from "./pages/dashboards/vendor-dashboard/VendorOverview";
import VendorPost from "./pages/dashboards/vendor-dashboard/VendorPost";
import VendorEdit from "./pages/dashboards/vendor-dashboard/VendorEdit";
import CustomerDashboard from "./layouts/CustomerLayout";
import CustomerOverview from "./pages/dashboards/customer-dashboard/CustomerOverview";
import SingleAd from "./pages/dashboards/customer-dashboard/SingleAd";
import About from "./pages/about.jsx/About";

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

  return <RouterProvider router={router} />;
}

export default App;
