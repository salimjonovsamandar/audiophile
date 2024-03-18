import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import "./App.css";
import Layout from "./layout/MainLayout";
import SeeProduct from "./pages/SeeProduct";
import Checkout from "./pages/Checkout";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    // Check for missing token and redirect only if necessary
    if (
      !localStorage.getItem("token") &&
      window.location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }, []); // Empty dependency array for initial token check

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthenticated,
  }) {
    if (!isAuthenticated) {
      navigate(redirectTo);
      return null;
    }
    return children;
  }

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute
            isAuthenticated={token ? true : false}
            redirectTo="/login"
          >
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/checkout"
        element={
          <ProtectedRoute
            isAuthenticated={token ? true : false}
            redirectTo="/login"
          >
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/:page"
        element={
          <ProtectedRoute
            isAuthenticated={token ? true : false}
            redirectTo="/login"
          >
            <Layout>
              <Headphones />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/:page/:id"
        element={
          <ProtectedRoute
            isAuthenticated={token ? true : false}
            redirectTo="/login"
          >
            <Layout>
              <SeeProduct />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
