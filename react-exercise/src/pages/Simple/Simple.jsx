import React, { useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

export default function Simple() {
  // const navText = "Hellow";

  const [github, setGithub] = useState("");

  const changeGithub = () => {
    setGithub(
      <a href="https://github.com/SanH16" target="_blank">
        Github
      </a>
    );
  };
  const content = () => {
    return (
      <>
        <p>Hallo bwang</p>
        <marquee>dont give up</marquee>
      </>
    );
  };

  const footer = () => {
    return (
      <>
        <p>Thankyou for watching</p>
        <p>Subscribe 🚀</p>
      </>
    );
  };
  return (
    <div style={{ margin: "auto", width: "80%", border: "5px solid pink" }}>
      <Header props={{ navText: "Hellow" }} githubValue={github} />
      <button onClick={() => changeGithub()}>navigation github</button>
      <Content content={content} />
      <Footer footer={footer} />
    </div>
  );
}
