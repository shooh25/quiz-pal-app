import React from "react";
import "./style.scss";

const Button = (props) => {
  const child = props.child;
  const styles = props.styles;
  const sizes = props.sizes;
  const onClick = props.onClick;

  return (
    <>
      <div className="button">
        <button onClick={onClick} className={`${styles} ${sizes}`}>{child}</button>
      </div>
    </>
  );
};

export default Button;
