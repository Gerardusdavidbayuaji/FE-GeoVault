import ReactDOM from "react-dom/client";
import React from "react";

// import DashboardAdmin from "./pages/admin/dashboard-admin";
import Login from "./pages/auth/login";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
