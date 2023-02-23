import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "components/Header";
import Result from "pages/Quiz/Result";
import Resolve from "pages/Quiz/Resolve";
import Contents from "containers/Contents";

const Quiz = () => {
  const book = useLocation().state;
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false); // プレイ画面と結果画面の切り替え
  const [score, setScore] = useState(0); // 正答数

  return (
    <Contents>
      <div>
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
        <Link to={"/"} onClick={() => setScore(0)}>
          戻る
        </Link>
      </div>
    </Contents>
  );
};

export default Quiz;
