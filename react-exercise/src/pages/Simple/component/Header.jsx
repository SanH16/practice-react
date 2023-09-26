const Header = (props) => {
  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <ul style={{ display: "flex", gap: "50px" }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>{props.navText}</li>
      </ul>
    </nav>
  );
};
export default Header;
