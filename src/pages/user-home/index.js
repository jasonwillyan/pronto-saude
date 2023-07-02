import { useContext } from "react";
import { MdLogout } from "react-icons/md";

import { ThemeContext } from "../../contexts/ThemeContext";
import useStyles from "./styles";

export default function UserHome() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  return (
    <>
      <div className={classes.header}>
        <h1>ProntoSaúde</h1>
        <input type="checkbox" id="switch" />
        <label for="switch">Toggle</label>
        <button>
          <MdLogout />
        </button>
      </div>

      <div className="container-wrapper">
        <div className="left-column">
          <div id="info" className="left-container">
            <h6>Legenda</h6>

            <div className="nested-container">
              <h4>
                <i className="fas fa-exclamation-triangle"></i>Alergias
              </h4>
              <ul className="allergies-list">
                <li>
                  <span className="severity-box severity-low"></span>
                  Poeira
                </li>
                <li>
                  <span className="severity-box severity-medium"></span>
                  Lactose
                </li>
                <li>
                  <span className="severity-box severity-high"></span>
                  Amendoin
                </li>
              </ul>
            </div>

            <div className="nested-container">
              <h4>
                <i className="fa fa-heartbeat"></i>Comorbidades
              </h4>
            </div>

            <div className="nested-container">
              <h4>
                <i className="fa fa-pills"></i>Medicamentos
              </h4>
            </div>
          </div>

          <div id="procedure" className="left-container"></div>
        </div>
        <div className="right-column">
          <div className="right-container"></div>
          <div className="right-container"></div>
        </div>
      </div>
    </>
  );
}
