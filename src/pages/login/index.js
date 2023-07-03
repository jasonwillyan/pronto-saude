import { useContext, useRef } from "react";
import classNames from "classnames";

import logo from "../../assets/ps.png";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Login() {
  const login = useRef(null);
  const signup = useRef(null);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  const slideLogin = () => {
    Array.from(login.current.classList).find((element) => {
      if (element !== "slide-up") {
        signup.current.classList.add("slide-up");
        login.current.classList.remove("slide-up");
      }
      return false;
    });
  };

  const slideSignup = () => {
    Array.from(signup.current.classList).find((element) => {
      if (element !== "slide-up") {
        login.current.classList.add("slide-up");
        signup.current.classList.remove("slide-up");
      }
      return false;
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <div className={classes.nameApp}>
          <span>Pronto Saúde</span>
          <p>Seu Prontuário de Saúde Pessoal</p>
        </div>
        <img src={logo} className={classes.imageLogo} aria-hidden />
      </div>

      <div className={classes.formStructor}>
        <div className={classes.login} ref={login}>
          <h2 className="form-title" id="login" onClick={slideLogin}>
            Entrar
          </h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="E-mail" />
            <input type="password" className="input" placeholder="Senha" />
          </div>
          <button className="submit-btn">Entrar</button>
        </div>

        <div className={classNames(classes.signUp, "slide-up")} ref={signup}>
          <div className="center">
            <h2 className="form-title" id="signup" onClick={slideSignup}>
              Criar conta
            </h2>
            <div className="form-holder">
              <input type="text" className="input" placeholder="Nome" />
              <input type="email" className="input" placeholder="E-mail" />
              <input type="password" className="input" placeholder="Senha" />
            </div>
            <button className="submit-btn">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
