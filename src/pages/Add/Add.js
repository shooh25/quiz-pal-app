import React from "react";
import { Link } from "react-router-dom";
import { useToggle } from "react-use";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Contents from "containers/Content";
import "./style.scss";

const Add = (props) => {
  const answers = ["True", "False"];
  const [answer, setAnswer] = useState("True");
  const [questionBool, setQuestionBool] = useToggle(false);

  // 問題集
  const [newBook, setNewBook] = useState({
    id: uuidv4(),
    title: "",
    count: 0,
    questions: [],
  });

  // 問題
  const [question, setQuestion] = useState({
    id: uuidv4(),
    answer: answer,
    desc: "",
  });

  // 正答を設定
  const swichAnswer = (value) => {
    setAnswer(value);
    setQuestion((state) => ({
      ...state,
      answer: value,
    }));
  };

  // 問題集を作成
  const addBook = () => {
    if (newBook.questions.length !== 0) {
      if (newBook.title === "") {
        setNewBook((state) => ({ ...state, title: "無題" }));
      }

      // props.setBooks((state) => [...state, newBook]);

      // 初期化
      setNewBook({
        id: uuidv4(),
        title: "",
        count: 0,
        questions: [],
      });
    } else {
      alert("問題を追加してください");
    }
  };

  // 問題を作成
  const addQuestion = () => {
    if (question.desc !== "") {
      setQuestionBool(true);
      setNewBook((state) => ({
        ...state,
        questions: [...state.questions, question],
      }));
    } else {
      alert("問題文を入力してください");
    }

    // 初期化
    setQuestion({
      id: uuidv4(),
      answer: answer,
      desc: "",
    });
  };

  return (
    <Contents>
      <div className="add">
        <div className="heading">
          <h1>新規ワークブック</h1>
        </div>
        <div className="body">
          <div className="item">
            <h2>タイトル</h2>
            <input
              className="textbox"
              type="text"
              value={newBook.title}
              onChange={(e) => {
                setNewBook((state) => ({ ...state, title: e.target.value }));
              }}
            />
          </div>

          <div className="item">
            <h2>問題作成</h2>
            <div className="form">
              <div className="form__item">
                <p>
                  問題文<span>100文字まで入力できます。</span>
                </p>
                <textarea
                  maxlength="100"
                  className="textbox"
                  type="text"
                  value={question.desc}
                  onChange={(e) => {
                    setQuestion((state) => ({
                      ...state,
                      desc: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="form__item">
                <p>
                  正答<span>クイズの正答を選んでください。</span>
                </p>
                <div className="container">
                  {answers.map((value) => {
                    return (
                      <label htmlFor="answer" key={value}>
                        <input
                          className="radio"
                          type="radio"
                          name="answer"
                          checked={value === answer}
                          onChange={(e) => {
                            swichAnswer(value);
                          }}
                        />
                        <span>{value}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="form__item">
                <div>
                  <button onClick={addQuestion}>問題を追加</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="list"
              style={{ visibility: questionBool ? "visible" : "hidden" }}
            >
              <ul>
                {newBook.questions.map((element, i) => {
                  return (
                    <li key={element.id}>
                      <p className="num">{i + 1}</p>
                      <p className="content">{element.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={addBook}>問題集を作成</button>
        <Link to={"/"}>
          <button>キャンセル</button>
        </Link>
      </div>
    </Contents>
  );
};

export default Add;
