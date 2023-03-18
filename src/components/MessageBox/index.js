import React from "react";
import "./style.scss";

const MessageBox = (props) => {
  const child = props.child;

  return (
    <>
      <div className="messageBox">
        <p>{child}</p>
      </div>
    </>
  );
};

export default MessageBox;
