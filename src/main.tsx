// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import home from "./components/Home.tsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([{ path: "/", element: <App></App> }]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
