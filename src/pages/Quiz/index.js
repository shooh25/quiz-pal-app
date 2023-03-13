import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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
          <Result length={book.questions.length} score={score} setScore={setScore} />
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
      </div>
    </Content>
  );
};

export default Quiz;
