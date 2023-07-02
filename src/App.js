import { useContext } from "react";
import Routes from "./routes";

import useStyles from "./styles";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  return (
    <div className={classes.body}>
      <Routes />
    </div>
  );
}

export default App;
