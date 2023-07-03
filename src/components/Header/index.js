import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { IoIosContrast } from "react-icons/io";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../assets/ps.png";
import useStyles from "./styles";

export default function Header() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link to="/home" className={classes.linkHome}>
          <div className={classes.logoContainer}>
            <img src={logo} aria-hidden className={classes.logo} />
            <h1 className={classes.titulo}>Pronto Saúde</h1>
          </div>
        </Link>

        <div>
          <IconButton aria-hidden className={classes.button} onClick={() => switchTheme()}>
            <IoIosContrast />
          </IconButton>
          <IconButton aria-label="Sair" className={classes.button}>
            <MdLogout />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
