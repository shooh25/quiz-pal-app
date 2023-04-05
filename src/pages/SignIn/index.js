import React from "react";
import Button from "../../components/Button";

import { auth, provider } from "../../firebase";
import tb1 from "../../images/tb1.png";
import tb2 from "../../images/tb2.png";

import "./style.scss";

const SignIn = () => {
  const SignInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <section className="signIn">
        <div className="body">
          <div className="fv">
            <div className="heading">
              <h1>QuizPAL</h1>
              <h2>○×クイズビルダー</h2>
              <p>誰でも簡単に○×クイズを作成し、遊ぶことのできるアプリです。</p>
            </div>
            <div className="formArea">
              <Button
                sizes="normal"
                styles="filledButton"
                child={"Googleでログインする"}
                onClick={SignInWithGoogle}
              />
            </div>
          </div>
          <div className="container">
            <div className="images">
              <div className="imageWrapper">
                <img src={tb2} alt="" />
              </div>
              <div className="imageWrapper">
                <img src={tb1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
