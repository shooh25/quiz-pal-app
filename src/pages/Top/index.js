import React from "react";
import { useState, useEffect } from "react";
import { useToggle } from "react-use";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import Button from "../../components/Button";

import samples from "db";
import Book from "../../images/book.png";
import "./style.scss";

const Top = () => {
  const [books, setBooks] = useState([]);
  const [popUpBool, setPopUpBool] = useToggle(false); // ポップアップの表示切り替え
  const [bookIndex, setBookIndex] = useState();

  const showPopUp = (i) => {
    setPopUpBool(true);
    setBookIndex(i);
  };

  const hidePopUp = () => {
    setPopUpBool(false);
  };

  const deleteBook = () => {
    setBooks(books.filter((element, index) => index !== bookIndex));
  };

  useEffect(() => {
    setBooks(samples);
  }, []);

  return (
    <Content>
      <div className="top">
        <div className="heading">
          <h1>自分のワークブック</h1>
          <Link to={"/add"}>
            <Button sizes="normal" styles="filledButton" child={"新規作成"} />
          </Link>
        </div>

        <div className="body">
          <ul>
            {books.map((element, i) => {
              return (
                <li key={element.id}>
                  <div className="left">
                    <img src={Book} alt="" />
                    <h2>{element.title}</h2>
                  </div>

                  <div className="right">
                    <div className="menuArea">
                      <Link
                        className="linkButton"
                        to={"/play"}
                        state={books[i]}
                      >
                        <Button
                          sizes="mini"
                          styles="filledButton"
                          child={"プレイ"}
                        />
                      </Link>

                      <Button
                        sizes="mini"
                        styles="dangerButton"
                        child={"削除"}
                        onClick={() => showPopUp(i)}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="popUpArea"
          style={{ visibility: popUpBool ? "visible" : "hidden" }}
        >
          <div className="overlay">
            <div className="popUp">
              <div className="container">
                <div className="top">
                  <h3>本当に削除しますか？</h3>
                  <p>一度削除すると、元に戻すことはできません。</p>
                </div>
                <div className="bottom">
                  <Button
                    sizes="normal"
                    styles="outlineButton"
                    child={"キャンセル"}
                    onClick={hidePopUp}
                    style={{ visibility: popUpBool ? "visible" : "hidden" }}
                  />
                  <Button
                    sizes="normal"
                    styles="dangerButton"
                    child={"削除"}
                    onClick={() => {
                      hidePopUp();
                      deleteBook();
                    }}
                    style={{ visibility: popUpBool ? "visible" : "hidden" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Top;
