import React, { FC } from "react";
import "./Header.css";
type Props = {
  appName: String;
};
const Header: FC<Props> = ({ appName }) => {
  return (
    <div className="Header">
      <img
        src={require("../../assets/logo.png")}
        alt="logo"
        className="brand_logo"
      />
      <p className="brand_name">{appName}</p>
    </div>
  );
};
export default Header;
