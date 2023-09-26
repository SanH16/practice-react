const Content = (props) => {
  return (
    <div style={{ display: "block", margin: "auto", width: "50%" }}>
      <h1 style={{ textAlign: "center" }}>Eyowezup🤖</h1>
      <p style={{ textAlign: "center" }}>{props.content()}</p>
    </div>
  );
};

export default Content;
