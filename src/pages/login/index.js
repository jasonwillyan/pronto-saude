import { useContext, useRef, useState } from "react";
import classNames from "classnames";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/ps.png";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/auth";

export default function Login() {
  const login = useRef(null);
  const signup = useRef(null);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  const navigate = useNavigate();

  async function handleSignIn() {
    const logged = await signIn({ email, password });

    if (logged) {
      navigate("/home");
    }
  }

  function resetForm() {
    setEmail(null);
    setName(null);
    setPassword(null);
  }

  const slideLogin = () => {
    Array.from(login.current.classList).find((element) => {
      if (element !== "slide-up") {
        signup.current.classList.add("slide-up");
        login.current.classList.remove("slide-up");
      }
      return false;
    });

    resetForm();
  };

  const slideSignup = () => {
    Array.from(signup.current.classList).find((element) => {
      if (element !== "slide-up") {
        login.current.classList.add("slide-up");
        signup.current.classList.remove("slide-up");
      }
      return false;
    });

    resetForm();
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
            <input
              value={email}
              type="email"
              className="input"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              value={password}
              type="password"
              className="input"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="submit-btn" onClick={handleSignIn}>
            Entrar
          </button>
        </div>

        <div className={classNames(classes.signUp, "slide-up")} ref={signup}>
          <div className="center">
            <h2 className="form-title" id="signup" onClick={slideSignup}>
              Criar conta
            </h2>
            <div className="form-holder">
              <input
                value={name}
                type="text"
                className="input"
                placeholder="Nome"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                value={email}
                type="email"
                className="input"
                placeholder="E-mail"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                value={password}
                type="password"
                className="input"
                placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="submit-btn">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
