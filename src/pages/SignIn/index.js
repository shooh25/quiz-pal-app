import React from "react";
import Button from "../../components/Button";

import { auth, provider } from "../../firebase";

import "./style.scss";

const SignIn = () => {
  const SignInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <section className="signIn">
        <div className="background"></div>
        <div className="body">
          <div className="heading">
            <h1>
              暇つぶしにも、
              <br />
              勉強にも。
            </h1>
            <h2>○×クイズビルダー</h2>
            <p>誰でも簡単に○×クイズを作成し、遊ぶことのできるアプリです。</p>
          </div>
          <form>
            <p>サインイン</p>
            <div className="menuArea">
              <Button
                sizes="normal"
                styles="filledButton"
                child={"Googleアカウントでログインする"}
                onClick={SignInWithGoogle}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
