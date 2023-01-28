import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <>
      <div className="fullScreenDiv">
        <div className="mainDashDiv">
          <div className="sideDashDiv">
            <h4> MyVets </h4>
            <Link to={""}> Dashboard </Link>
            {/* <Link to={""}> Users </Link> */}
          </div>
          <div className="DashDiv">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
