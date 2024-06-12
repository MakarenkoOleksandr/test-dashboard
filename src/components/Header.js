import userInfo from "../props/user.js";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Hello {userInfo.name} 👋🏼,</h1>
    </header>
  );
};

export default Header;
