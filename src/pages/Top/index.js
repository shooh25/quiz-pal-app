import React from "react";
import { useState, useEffect } from "react";
import { useToggle } from "react-use";
import { Link } from "react-router-dom";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Header from "../../components/Header";
import MessageBox from "../../components/MessageBox";

import { auth } from "../../firebase";
import { db } from "../../firebase";
import BookIcon from "../../images/book.png";
import EmptyImage from "../../images/emptyIllustration.png";
import "./style.scss";

const Top = () => {
  const [userId, setUserId] = useState(""); // ユーザー情報
  const [books, setBooks] = useState([]);
  const [bookIndex, setBookIndex] = useState(null);
  const [popUpBool, setPopUpBool] = useToggle(false);
  const [boxBool, setBoxBool] = useToggle(false);

  // dbからドキュメントを読み込み
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserId(user.uid);
      const userDoc = db.collection("users").doc(user.uid);

      userDoc.get().then((doc) => {
        if (!doc.exists) {
          userDoc.set({
            booksData: [],
          });
        }
        userDoc.onSnapshot((snapshot) => {
          setBooks(snapshot.data().booksData);
        });
      });
    });
  }, []);

  const deleteBook = () => {
    const userDoc = db.collection("users").doc(userId);
    userDoc.get().then((doc) => {
      const revisedArray = doc.data().booksData;
      revisedArray.splice(bookIndex, 1);
      userDoc.update({
        booksData: revisedArray,
      });
    });

    // 初期化
    setBookIndex(null);

    // ボックスを数秒間表示
    setBoxBool(true);
    setTimeout(() => {
      setBoxBool(false);
    }, 2000);
  };

  return (
    <>
      <Header />
      <Content>
        <div className="top">
          <div className="heading">
            <h1>自分のワークブック</h1>
            <Link to={"/add"} state={userId}>
              <Button sizes="normal" styles="filledButton" child={"新規作成"} />
            </Link>
          </div>

          <div className="body">
            {books.length ? (
              <div>
                <ul>
                  {books.map((book, i) => {
                    return (
                      <li key={i}>
                        <div className="left">
                          <img src={BookIcon} alt="" />
                          <h2>{book.title}</h2>
                        </div>

                        <div className="right">
                          <div className="menuArea">
                            <Link
                              className="linkButton"
                              state={book}
                              to={"/play"}
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
                              onClick={() => {
                                setPopUpBool(true);
                                setBookIndex(i);
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="noContent">
                <div className="container">
                  <div className="imgWrapper">
                    <img src={EmptyImage} alt="" />
                  </div>
                  <h2>ワークブックを追加しよう！</h2>
                  <p>右上の「新規追加」からワークブックを作成しましょう。</p>
                </div>
              </div>
            )}
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
                      onClick={() => {
                        setPopUpBool(false);
                        setBookIndex(null);
                      }}
                      style={{ visibility: popUpBool ? "visible" : "hidden" }}
                    />
                    <Button
                      sizes="normal"
                      styles="dangerButton"
                      child={"削除"}
                      onClick={() => {
                        setPopUpBool(false);
                        deleteBook();
                      }}
                      style={{ visibility: popUpBool ? "visible" : "hidden" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="boxArea"
            style={{
              visibility: boxBool ? "" : "hidden",
              opacity: boxBool ? "1" : "0",
            }}
          >
            <MessageBox child="ワークブックを削除しました" />
          </div>
        </div>
      </Content>
    </>
  );
};

export default Top;
