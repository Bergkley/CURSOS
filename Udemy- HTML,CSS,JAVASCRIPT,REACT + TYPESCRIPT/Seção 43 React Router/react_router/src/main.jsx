import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";


import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import Product from "./routes/Product.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "products/:id/info",
        element: <Info />,
      },
      {
        path: "search",
        element: <Search />,
      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
  
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
