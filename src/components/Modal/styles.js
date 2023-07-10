import { createUseStyles } from "react-jss";
import enumTheme from "../../utils/theme/enumTheme";

const useStyles = createUseStyles({
  modalContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  modalContent: {
    backgroundColor: ({ theme }) => theme.palette.white,
    border: ({ theme }) => (theme.name === enumTheme.highContrast ? "2px solid white" : ""),
    width: "80vw",
    height: "90vh",
    borderRadius: 15,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    overflow: "auto"
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    color: ({ theme }) => theme.palette.text
  },
  subtitle: {
    fontSize: 20,
    color: ({ theme }) => theme.palette.text
  },
  row: {
    marginBottom: 16
  },
  label: {
    color: ({ theme }) => theme.palette.text,
    fontWeight: 700,
    marginBottom: 8
  },
  content: {
    color: ({ theme }) => theme.palette.text
  },
  fileButton: {
    display: "flex",
    alignItems: "center",
    textTransform: "initial",
    fontSize: 16,
    color: ({ theme }) => theme.palette.primaryColor
  },
  list: {
    marginLeft: 16,
    "& li": {
      marginBottom: 8
    }
  }
});

export default useStyles;
