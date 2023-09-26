const Footer = (props) => {
  return (
    <div style={{ display: "block", margin: "auto", width: "50%" }}>
      <p style={{ textAlign: "center" }}>{props.footer()}</p>
    </div>
  );
};

export default Footer;
