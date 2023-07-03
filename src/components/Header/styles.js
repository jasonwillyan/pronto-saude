import { createUseStyles } from "react-jss";
import enumTheme from "../../utils/theme/enumTheme";

const useStyles = createUseStyles({
  linkHome: {
    textDecoration: "none"
  },
  header: {
    width: "100%",
    padding: "0.5em 2em",
    backgroundColor: ({ theme }) => theme.palette.white,
    borderBottom: ({ theme }) => (theme.name === enumTheme.highContrast ? "1px solid white" : ""),
    display: "flex",
    justifyContent: "center"
  },
  content: {
    width: "100%",
    maxWidth: 1500,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    width: 60,
    height: 60
  },
  titulo: {
    marginLeft: 8,
    fontSize: "1.75em",
    fontWeight: "600",
    color: ({ theme }) => theme.palette.text
  },
  button: {
    color: ({ theme }) => theme.palette.text
  },
  "@media (max-width: 500px)": {
    titulo: {
      display: "none"
    }
  }
});

export default useStyles;
