
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import VendorLogin from './pages/vendor/VendorLogin'
import VendorSignup from './pages/vendor/VendorSignup'
import Discretion from './pages/discretion/Discretion'
import VendorPrivacy from './pages/privacyAgreement/VendorPrivacy'
import CustomerLogin from './pages/customer/CustomerLogin'
import CustomerSignup from './pages/customer/CustomerSignup'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
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
      element:<CustomerSignup/>
    },
  ])


  return <RouterProvider router={router} />
}

export default App;
