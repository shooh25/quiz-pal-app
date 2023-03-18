import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToggle } from "react-use";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Header from "../../components/Header";
import MessageBox from "../../components/MessageBox";
import { db } from "../../firebase";

import { v4 as uuidv4 } from "uuid";
import "./style.scss";

const Add = () => {
  const answers = ["◯", "✕"];
  const [answer, setAnswer] = useState("◯");
  const [boxBool, setBoxBool] = useToggle(false);

  // ワークブック
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

  // ワークブックを作成
  const addBook = () => {
    if (newBook.questions.length) {
      if (newBook.title !== "") {
        saveBook();

        // 初期化
        setNewBook({
          id: uuidv4(),
          title: "",
          count: 0,
          questions: [],
        });

        setBoxBool(true);
        setTimeout(() => {
          setBoxBool(false);
        }, 2000);
      } else {
        alert("タイトルを決めてください");
      }
    } else {
      alert("問題を追加してください");
    }
  };

  // ワークブックを保存
  const saveBook = () => {
    db.collection("booksData").add(newBook);
  };

  // 問題を作成
  const addQuestion = () => {
    if (question.desc !== "") {
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
    <>
      <Header />

      <Content>
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
                <div className="formItem">
                  <p>
                    問題文<span>100文字まで入力できます。</span>
                  </p>
                  <textarea
                    maxLength={"100"}
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

                <div className="formItem">
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

                <div className="buttonArea">
                  <div>
                    <Button
                      sizes="normal"
                      styles="filledButton"
                      child={"問題を追加"}
                      onClick={addQuestion}
                    />
                  </div>
                </div>
              </div>
            </div>

            {newBook.questions.length ? (
              <div className="item">
                <div className="list">
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
            ) : null}
          </div>

          <div className="menuArea">
            <Button
              sizes="normal"
              styles="filledButton"
              child={"保存"}
              onClick={addBook}
            />
            <Link to={"/"}>
              <Button
                sizes="normal"
                styles="outlineButton"
                child={"キャンセル"}
              />
            </Link>
          </div>

          <div
            className="boxArea"
            style={{
              visibility: boxBool ? "" : "hidden",
              opacity: boxBool ? "1" : "0",
            }}
          >
            <MessageBox child="ワークブックを作成しました" />
          </div>
        </div>
      </Content>
    </>
  );
};

export default Add;
