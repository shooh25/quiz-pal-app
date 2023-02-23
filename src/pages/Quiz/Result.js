import Contents from "containers/Contents";
import React from "react";

const Result = (props) => {
  return (
    <Contents>
      <h2>以上です</h2>
      <p>{props.score}</p>
    </Contents>
  );
};

export default Result;