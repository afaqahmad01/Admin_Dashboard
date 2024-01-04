import React from "react";
import SideNav from "../components/sidenav";

const Layout = ({ children }) => {
  return (
    <>
      <SideNav />

      <div className="md:ml-[200px] md:mt-[65px] mt-[58px] ml-0">
        {children}
      </div>
    </>
  );
};

export default Layout;
