import { useRef } from "react";

import "./styles.css";
import logo from "../../assets/ps.png";

export default function Login() {
  const login = useRef(null);
  const signup = useRef(null);

  const slideLogin = () => {
    Array.from(login.current.classList).find((element) => {
      if (element !== "slide-up") {
        login.current.classList.add("slide-up");
        signup.current.click();
      } else {
        signup.current.classList.add("slide-up");
        login.current.classList.remove("slide-up");
      }
      return false;
    });
  };

  const slideSignup = () => {
    Array.from(signup.current.classList).find((element) => {
      if (element !== "slide-up") {
        signup.current.classList.add("slide-up");
        login.current.click();
      } else {
        login.current.classList.add("slide-up");
        signup.current.classList.remove("slide-up");
      }
      return false;
    });
  };

  return (
    <div id="container">
      <div id="logo">
        <div id="name-app">
          <span>Pronto Saúde</span>
          <p>Seu Prontuário de Saúde Pessoal</p>
        </div>
        <img src={logo} id="image-logo" aria-hidden />
      </div>

      <div className="form-structor">
        <div className="signup" ref={signup}>
          <h2 className="form-title" id="signup" onClick={slideSignup}>
            <span>ou</span>Registrar
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Registrar</button>
        </div>

        <div className="login slide-up" ref={login}>
          <div className="center">
            <h2 className="form-title" id="login" onClick={slideLogin}>
              <span>ou</span>Entrar
            </h2>
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button className="submit-btn">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
