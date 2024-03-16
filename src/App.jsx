import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import SeeProduct from "./pages/SeeProduct";
import "./App.css";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <MainLayout>
              <Headphones></Headphones>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/speakers"
          element={
            <MainLayout>
              <Speakers></Speakers>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/earphones"
          element={
            <MainLayout>
              <Earphones></Earphones>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/seeProduct"
          element={
            <MainLayout>
              <SeeProduct></SeeProduct>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
