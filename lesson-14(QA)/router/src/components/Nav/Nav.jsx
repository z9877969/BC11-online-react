import { NavLink } from "react-router-dom";

const btnStyle = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "green",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "24px",
  borderRadius: "30%",
};

const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <NavLink
          className="link"
          exact
          to="/"
          style={btnStyle}
          activeStyle={{ color: "red" }}
        >
          Home
        </NavLink>
        <NavLink
          className="link"
          to="/timer"
          style={btnStyle}
          activeStyle={{ color: "red" }}
        >
          Timer
        </NavLink>
        <NavLink
          className="link"
          to="/todo"
          style={btnStyle}
          activeStyle={{ color: "red" }}
        >
          ToDo
        </NavLink>
        <NavLink
          className="link"
          to="/news"
          style={btnStyle}
          activeStyle={{ color: "red" }}
        >
          News
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
