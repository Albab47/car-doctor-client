import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/HomePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import Checkout from "../pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/signup',
            element: <SignupPage />
        },
        {
            path: '/checkout/:id',
            element: <Checkout />
        }
    ]
  },
]);

export default router;