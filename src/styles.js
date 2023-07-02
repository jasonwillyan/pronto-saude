import { createUseStyles } from "react-jss";
import enumTheme from "./utils/theme/enumTheme";

const useGlobalStyles = createUseStyles({
  body: {
    backgroundColor: ({ theme }) => theme.palette.background,
    fontFamily: "'Fira Sans', sans-serif",
    width: "100vw",
    minHeight: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  primaryButton: {
    borderRadius: 15,
    padding: "8px 16px",
    maxWidth: 250,
    width: "100%",
    color: ({ theme }) => theme.palette.white,
    backgroundColor: ({ theme }) => theme.palette.primaryColor,
    fontFamily: "'Fira Sans', sans-serif",
    textTransform: "capitalize",
    marginTop: 8,
    "&:hover": {
      backgroundColor: ({ theme }) => theme.palette.primaryColor,
      filter: ({ theme }) => (theme.name === enumTheme.light ? "brightness(0.8)" : ""),
      transition: "all 0.3s ease"
    }
  }
});

export default useGlobalStyles;
