import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const url =
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";
  return (
    <section>
      <div className="header">
        <h1 className="header--text">ReactMeals</h1>
        <HeaderCartButton onClick={props.showCartHandler}></HeaderCartButton>
      </div>
      <div className="header-img">
        <img src={url} alt="abc"></img>
      </div>
    </section>
  );
};
export default Header;
