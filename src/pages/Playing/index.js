import React from "react";
import { useState } from "react";
import { useToggle } from "react-use";
import Button from "../../components/Button";

import TrueImage from "../../images/true.svg";
import FalseImage from "../../images/false.svg";
import "./style.scss";

const Resolve = (props) => {
  const book = props.book;
  const index = props.index;
  const score = props.score;
  const setIndex = props.setIndex;
  const setFinish = props.setFinish;
  const setScore = props.setScore;

  const [answer, setAnswer] = useState(null); // ユーザーの回答
  const [showResult, setShowResult] = useToggle(false); // 各問題の正答結果画面を表示
  const [resultSentence, setResultSentence] = useToggle(false); // 正解か不正解かで表示を分岐

  // 答えを判定してメッセージを表示
  const judgeAnswer = () => {
    if (answer === null) {
      alert("答えを選んでください");
    } else {
      if (answer === book.questions[index].answer) {
        setResultSentence(true);
        setScore(score + 1);
      }
      setShowResult(true); // 結果画面に切り替え
    }
  };

  // 次の問題へ移動
  const ChangeScreen = () => {
    if (index < book.questions.length - 1) {
      setIndex(index + 1);
    } else {
      setFinish(true);
    }
    setAnswer(null);
    setShowResult(false);
    setResultSentence(false);
  };

  return (
    <>
      <div className="playing">
        <div className="heading">
          <h1>
            {index + 1} / {book.questions.length}
          </h1>
        </div>
        <div className="body">
          <div className="sentence">
            <h2>{book.questions[index].desc}</h2>
          </div>
          <div
            className="answerArea"
            style={{ display: showResult ? "none" : "" }}
          >
            <div className="container">
              <label htmlFor="correct">
                <input
                  id="correct"
                  type="radio"
                  name="answer"
                  onChange={(e) => setAnswer("◯")}
                  checked={answer === "◯"}
                />
                <div className="buttonFrame blue">
                  <div className="buttonBody blue">
                    <div className="imageWrapper" id="text">
                      <img src={TrueImage} alt="" />
                    </div>
                  </div>
                </div>
              </label>
              <label htmlFor="incorrect">
                <input
                  id="incorrect"
                  type="radio"
                  name="answer"
                  onChange={(e) => setAnswer("✕")}
                  checked={answer === "✕"}
                />
                <div className="buttonFrame">
                  <div className="buttonBody">
                    <div className="imageWrapper">
                      <img src={FalseImage} alt="" />
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="menuArea" style={{ display: showResult ? "none" : "" }}>
          <Button
            sizes="normal"
            styles="filledButton"
            child={"判定へすすむ"}
            onClick={judgeAnswer}
          />
        </div>

        {/* 判定ボタンを押した時に表示 */}
        <div
          className="resultArea"
          style={{ display: showResult ? "" : "none" }}
        >
          <div className="top">
            {resultSentence ? <h2>正解</h2> : <h2>不正解</h2>}
            <p>答えは {book.questions[index].answer} です</p>
          </div>
          <div className="bottom">
            <Button
              sizes="normal"
              styles="filledButton"
              child={"次の問題へ"}
              onClick={ChangeScreen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resolve;
