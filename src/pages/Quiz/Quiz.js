import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Result from "pages/Result";
import Resolve from "pages/Playing";
import Content from "components/Content";
import "./style.scss";

const Quiz = () => {
  const book = useLocation().state;
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false); // プレイ画面と結果画面の切り替え
  const [score, setScore] = useState(0); // 正答数

  return (
    <Content>
      <div className="quiz">
        {finish ? (
          <Result book={book} index={index} score={score} />
        ) : (
          <Resolve
            book={book}
            index={index}
            score={score}
            setIndex={setIndex}
            setFinish={setFinish}
            setScore={setScore}
          />
        )}
        <div className="menuArea">
          <Link to={"/"} onClick={() => setScore(0)}>
            <button>トップへ戻る</button>
          </Link>
        </div>
      </div>
    </Content>
  );
};

export default Quiz;
