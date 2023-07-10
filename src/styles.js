import { createUseStyles } from "react-jss";
import enumTheme from "./utils/theme/enumTheme";

const useGlobalStyles = createUseStyles({
  body: {
    backgroundColor: ({ theme }) => theme.palette.background,
    width: "100%",
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
    padding: "14px 16px",
    maxWidth: 250,
    width: "100%",
    color: ({ theme }) => theme.palette.white,
    backgroundColor: ({ theme }) => theme.palette.primaryColor,
    textTransform: "initial",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 16,
    marginTop: 16,
    "&:hover": {
      backgroundColor: ({ theme }) => theme.palette.primaryColor,
      filter: ({ theme }) => (theme.name === enumTheme.light ? "brightness(0.8)" : ""),
      transition: "all 0.3s ease"
    }
  },
  deleteButton: {
    borderRadius: 15,
    padding: "10px 16px",
    maxWidth: 250,
    width: "100%",
    color: ({ theme }) => theme.palette.white,
    backgroundColor: ({ theme }) => theme.palette.red,
    textTransform: "initial",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 16,
    marginTop: 16,
    "&:hover": {
      backgroundColor: ({ theme }) => theme.palette.red,
      filter: ({ theme }) => (theme.name === enumTheme.light ? "brightness(0.8)" : ""),
      transition: "all 0.3s ease"
    }
  },
  primaryOutlineButton: {
    borderRadius: 15,
    border: ({ theme }) => `2px solid ${theme.palette.primaryColor}`,
    padding: "8px 32px",
    color: ({ theme }) => theme.palette.primaryColor,
    backgroundColor: ({ theme }) => theme.palette.white,
    textTransform: "initial",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 16,
    marginTop: 16
  }
});

export default useGlobalStyles;
