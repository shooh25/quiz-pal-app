import React from "react";
import "./style.scss";
import Button from "../Button";
import { auth } from "../../firebase";

const Header = () => {
  const signOut = () => {
    auth.signOut();
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <Button
            sizes="mini"
            styles="outlineButton"
            child={"ログアウト"}
            onClick={signOut}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
