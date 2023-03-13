import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import "./style.scss";

const Result = (props) => {
  const score = props.score;
  const length = props.length;
  const setScore = props.setScore;
  const rate = Math.floor((score / length) * 100);

  return (
    <>
      <div className="result">
        <div className="body">
          <div className="board">
            <h1>
              {length} 門中<span>{score}</span>門正解
            </h1>
            <h2>( {rate}％正解 )</h2>
          </div>

          <div className="menuArea">
            <Link to={"/"} onClick={() => setScore(0)}>
              <Button
                sizes="normal"
                styles="filledButton"
                child={"トップへ戻る"}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
