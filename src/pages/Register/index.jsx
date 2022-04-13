import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "./style.css";
import logo from "../../assets/logo.svg";
import visiblePasswordIcon from "../../assets/visiblePassword.svg";
import invisiblePasswordIcon from "../../assets/invisiblePassword.svg";

export function Register() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="container-pageRegister">
      <div className="aside-container">
        <h2 className="aside-text">
          Gerencie todos as suas leads <br /> em um só lugar.
        </h2>
        <img className="aside-img" src={logo} alt="logomarca" />
      </div>
      <div className="login-container">
        <h2>Faça seu cadastro!</h2>
        <form className="form">
          <div className="input">
            <label htmlFor="email">Usuário:</label>
            <input className="input-text" required type="text" />
          </div>
          <div className="input">
            <label htmlFor="password">Senha:</label>
            <input
              className="input-text"
              required
              type={visiblePassword ? "text" : "password"}
              id="password"
              minLength="8 char"
            />
            <img
              className="password-type"
              src={
                visiblePassword ? visiblePasswordIcon : invisiblePasswordIcon
              }
              alt=""
              onClick={() => setVisiblePassword(!visiblePassword)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Confirmação de senha:</label>
            <input
              className="input-text"
              required
              type={visiblePassword ? "text" : "password"}
              id="password"
              minLength="8 char"
            />
            <img
              className="password-type"
              src={
                visiblePassword ? visiblePasswordIcon : invisiblePasswordIcon
              }
              alt=""
              onClick={() => setVisiblePassword(!visiblePassword)}
            />
          </div>
          <button className="button">Cadastrar</button>
        </form>
        <span>
          Já possui uma conta?{" "}
          <Link to={"/"} className="linkToRegister">
            Faça seu login!
          </Link>
        </span>
      </div>
    </div>
  );
}
