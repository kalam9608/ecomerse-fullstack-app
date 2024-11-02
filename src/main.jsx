import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import SignUpPage from "./pages/SignUpPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetails from "./pages/ProductDetailsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ProtectedRoute from "./components/features/auth/ProtectedRoute.jsx";
import PageNotFound from "./pages/404.jsx";
import OrderSuccessPage from "./pages/OrderSuccess.jsx";
import MyOrderPage from "./pages/MyOrderPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import UserProfile from "./components/features/user/components/userProfile.jsx";
import MyProfilePage from "./pages/MyProfilePage.jsx";
import ForgoutPage from "./pages/ForgoutPage.jsx";
import AdminProtectedRoute from "./components/features/auth/AdminProtectedRoute.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import ProductPageForm from "./pages/ProductPageForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <AdminProtectedRoute>
            <AdminHome />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            {" "}
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <ProtectedRoute>
            <ProductDetailsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/product-form",
        element: (
          <AdminProtectedRoute>
            <ProductPageForm />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/product-form/edit/:id",
        element: (
          <AdminProtectedRoute>
            <ProductPageForm />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/order-success/:id",
        element: (
          <ProtectedRoute>
            <OrderSuccessPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <ProtectedRoute>
            <MyOrderPage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/logout",
        element: (
          <ProtectedRoute>
            <LogoutPage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <MyProfilePage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgoutPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
