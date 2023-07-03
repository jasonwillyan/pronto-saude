import { createUseStyles } from "react-jss";
import enumTheme from "../../utils/theme/enumTheme";

const useStyles = createUseStyles({
  containerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: 1500,
    padding: "2em"
  },
  card: {
    padding: "2em",
    backgroundColor: ({ theme }) => theme.palette.white,
    borderRadius: 15,
    marginTop: 24,
    border: ({ theme }) => (theme.name === enumTheme.highContrast ? "1px solid white" : "")
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: ({ theme }) => theme.palette.primaryColor
    }
  },
  tab: {
    padding: "8px 16px",
    fontSize: "1em",
    fontWeight: 500,
    textTransform: "initial",
    color: ({ theme }) => theme.palette.text,
    "&.Mui-selected": {
      color: ({ theme }) => theme.palette.primaryColor
    }
  }
});

export default useStyles;
