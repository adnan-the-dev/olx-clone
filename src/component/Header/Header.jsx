import React from "react";
import "./header.css";
import Appbar from "./components/Appbar";
import Content from "./components/Content";
import Menu from "./components/Menu";

function Header() {
  return (
    <>
      <div className="header">

        <div className="box1">
          <Appbar />
        </div>

        <div className="box2">
          <Content />
        </div>
        <div className="box3">
          <Menu />
        </div>
        
      </div>
    </>
  );
}
export default Header;
