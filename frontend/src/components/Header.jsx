import React from "react";
import logo from "../assets/logo.png"; // Adjust the path based on where Header.jsx is

export function Header({ ml, mt }) {
  return (
    <div className="bg-[#267EE2] h-[86px] flex items-center" style={{ marginLeft: ml, marginTop: mt }}>
      <img src={logo} alt="Logo" className="h-full ml-4 size-4" />
    </div>
  );
}