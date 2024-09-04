import React from "react";
import { createBrowserRouter, RouterProvider, Outlet,Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Header from "../pages/Header";
import Product from "../pages/Product";

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />,
      </>
    ),

    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "product/:id", element: <Product /> },
      { path: "*", element: <Navigate to='/login' /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={guestRouter} />;
}

// const guestRouter = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/login", element: <Login /> },
//   { path: "*", element: <NotFound /> },
// ]);
