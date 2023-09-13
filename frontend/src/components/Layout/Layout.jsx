import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import css from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
