import Contents from "containers/Contents";
import React from "react";
import { useState } from "react";

const Resolve = (props) => {
  const book = props.book;
  const index = props.index;
  const score = props.score;
  const setIndex = props.setIndex;
  const setFinish = props.setFinish;
  const setScore = props.setScore;

  const [answer, setAnswer] = useState(null); // ユーザーの回答
  const [showResult, setShowResult] = useState(false); // 各問題の正答結果画面を表示
  const [resultSentence, setResultSentence] = useState("");

  // 答えを判定してメッセージを表示
  const judgeAnswer = () => {
    if (answer !== null) {
      setShowResult(true); // 結果画面に切り替え
      if (answer === book.questions[index].answer) {
        setResultSentence("正解");
        addScore();
      } else {
        setResultSentence("不正解");
      }
    } else {
      alert("答えを選べ");
    }
  };

  // 正答数加算
  const addScore = () => {
    setScore(score + 1);
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
  };

  return (
    <Contents>
      <h2>{book.questions[index].desc}</h2>
      <div style={{ display: showResult ? "none" : "" }}>
        <input
          type="radio"
          name="answer"
          onChange={(e) => setAnswer(true)}
          checked={answer === true}
        />
        ○
        <input
          type="radio"
          name="answer"
          onChange={(e) => setAnswer(false)}
          checked={answer === false}
        />
        ✕
        <button
          onClick={() => {
            judgeAnswer();
          }}
        >
          判定
        </button>
      </div>
      <div>
        {/* 判定ボタンを押した時に表示 */}
        <div style={{ display: showResult ? "" : "none" }}>
          <p>{resultSentence}</p>
          <button onClick={ChangeScreen}>次の問題へ</button>
        </div>
      </div>
    </Contents>
  );
};

export default Resolve;
