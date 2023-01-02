import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from "./pages/home";
// import Antibiotic from "./pages/blog-antibiotic";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     // errorElement: <h1>SORROY............</h1>,
//   },
//   {
//     path: "/Antibiotic",
//     element: <Antibiotic />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
