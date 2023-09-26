import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

export default function Simple() {
  const navText = "Hellow";

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
      <Header navText={navText} />
      <Content content={content} />
      <Footer footer={footer} />
    </div>
  );
}
