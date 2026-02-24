import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Orbit Studio</div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;