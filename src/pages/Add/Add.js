import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Contents from "containers/Contents";

const Add = (props) => {
  // 問題集
  const [newBook, setNewBook] = useState({
    id: uuidv4(),
    title: "",
    count: 0,
    questions: [],
  });

  // 問題
  const [question, setQuestion] = useState({
    correct: true,
    id: uuidv4(),
    desc: "",
  });

  const addBook = () => {
    if (newBook.questions.length !== 0) {
      if (newBook.title === "") {
        setNewBook((state) => ({ ...state, title: "無題" }));
      }
      props.setBooks((state) => [...state, newBook]);

      setNewBook({
        //初期化
        id: uuidv4(),
        title: "",
        count: 0,
        questions: [],
      });
    } else {
      alert("問題を追加してください");
    }
  };

  const addQuestion = () => {
    if (question.desc !== "") {
      setNewBook((state) => ({
        ...state,
        questions: [...state.questions, question],
      }));
    } else {
      alert("問題文を入力してください");
    }

    setQuestion({
      //初期化
      id: uuidv4(),
      correct: true,
      desc: "",
    });
  };

  return (
    <Contents>
      <div>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => {
            setNewBook((state) => ({ ...state, title: e.target.value }));
          }}
        />
        <div>
          <div>
            <input
              type="text"
              value={question.desc}
              onChange={(e) => {
                setQuestion((state) => ({ ...state, desc: e.target.value }));
              }}
            />
            <div>
              <input
                type="radio"
                name="correct"
                onChange={(e) => {
                  setQuestion((state) => ({ ...state, correct: true }));
                }}
              />
              ○
              <input
                type="radio"
                name="correct"
                onChange={(e) => {
                  setQuestion((state) => ({ ...state, correct: false }));
                }}
              />
              ✕
            </div>
          </div>

          <button onClick={addQuestion}>問題を追加</button>
        </div>
      </div>

      {/* 一覧表示 */}
      <ul>
        {newBook.questions.map((element) => {
          return <li key={element.id}>{element.desc}</li>;
        })}
      </ul>
      <div>
        <button onClick={addBook}>決定</button>
      </div>
    </Contents>
  );
};

export default Add;
