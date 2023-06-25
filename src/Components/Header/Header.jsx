import "./header.css";
import Logo from "../Logo/Logo";
import User from "../User/User";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Logo />
        <User />
      </div>
    </header>
  );
};

export default Header;
