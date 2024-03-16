import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import SeeProduct from "./pages/SeeProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import "./App.css";
import Layout from "./layout/MainLayout";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login");
    }
  }, []);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }
    return children;
  }

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Home></Home>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Headphones></Headphones>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Speakers></Speakers>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/earphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Earphones></Earphones>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/seeProduct"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <SeeProduct></SeeProduct>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
