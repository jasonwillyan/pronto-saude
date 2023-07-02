import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  body: {
    margin: 0,
    padding: 0,
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: ({ theme }) => theme.background,
    fontFamily: "'Fira Sans', sans-serif",
    width: "100vw",
    minHeight: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default useStyles;
