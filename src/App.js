import { useContext } from "react";
import Routes from "./routes";

import "./global.css";
import useGlobalStyles from "./styles";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const classes = useGlobalStyles({ theme });

  return (
    <div className={classes.body}>
      <Routes />
    </div>
  );
}

export default App;
