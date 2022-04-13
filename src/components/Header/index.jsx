import "./style.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
}
