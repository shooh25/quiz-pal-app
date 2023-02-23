import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "components/Header";
import Add from "pages/Add/Add";
import Contents from "containers/Contents";
import samples from "db";
import 'pages/Top/Top.scss';

const Top = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(samples);
  }, []);

  return (
    <Contents>
      <div className="top">
        <h2>自分のノートブック</h2>
        <Link to={"/add"}>新規作成</Link>
        <ul>
          {books.map((element, i) => {
            return (
              <li key={element.id} className="quizList__card">
                <Link to={"/play"} state={books[i]}>
                  {element.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Contents>
  );
};

export default Top;
