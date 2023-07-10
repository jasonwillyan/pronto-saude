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
  title: {
    fontSize: 24,
    marginBottom: 32,
    color: ({ theme }) => theme.palette.text
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 24,
    color: ({ theme }) => theme.palette.text
  },
  titleH4: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 16,
    color: ({ theme }) => theme.palette.text
  },
  row: {
    marginBottom: 24
  },
  recipeItems: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 32px",
    columnGap: 16,
    marginBottom: 16
  },
  buttonAddFile: {
    borderRadius: 15,
    border: ({ theme }) => `2px solid ${theme.palette.primaryColor}`,
    padding: "3px 16px",
    color: ({ theme }) => theme.palette.primaryColor,
    backgroundColor: ({ theme }) => theme.palette.white,
    textTransform: "initial",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 16
  }
});

export default useStyles;
