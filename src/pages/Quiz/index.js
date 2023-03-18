import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Result from "../Result";
import Playing from "../Playing";
import Header from "../../components/Header";
import Content from "../../components/Content";
import "./style.scss";

const Quiz = () => {
  const book = useLocation().state.docData;
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false); // プレイ画面と結果画面の切り替え
  const [score, setScore] = useState(0); // 正答数

  return (
    <>
    <Header/>
      <Content>
        <div className="quiz">
          {finish ? (
            <Result
              length={book.questions.length}
              score={score}
              setScore={setScore}
            />
          ) : (
            <Playing
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
    </>
  );
};

export default Quiz;
