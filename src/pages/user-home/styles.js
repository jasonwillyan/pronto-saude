import { createUseStyles } from "react-jss";
import enumTheme from "../../utils/theme/enumTheme";

const useStyles = createUseStyles({
  containerWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: 1500,
    padding: "2em"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  card: {
    padding: "2em",
    backgroundColor: ({ theme }) => theme.palette.white,
    borderRadius: 15,
    marginBottom: 24,
    border: ({ theme }) => (theme.name === enumTheme.highContrast ? "1px solid white" : "")
  },
  title: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: ({ theme }) => theme.palette.text,
    marginBottom: 16,
    alignSelf: "start"
  },
  titleCenter: {
    alignSelf: "center"
  },
  list: {
    listStyle: "none"
  },
  item: {
    display: "flex",
    marginBottom: 8,
    color: ({ theme }) => theme.palette.text
  },
  captionIndicator: {
    width: 24,
    height: 18,
    borderRadius: 3,
    marginRight: 8
  },
  severityLow: {
    backgroundColor: ({ theme }) => theme.palette.yellow
  },
  severityMedium: {
    backgroundColor: ({ theme }) => theme.palette.orange
  },
  severityHigh: {
    backgroundColor: ({ theme }) => theme.palette.red
  },
  medicineContainer: {
    listStyle: "inside"
  },
  medicineItem: {
    marginBottom: 8,
    color: ({ theme }) => theme.palette.text
  },
  caption: {
    marginTop: 24
  },
  captionTitle: {
    fontSize: "1em",
    fontWeight: "bold",
    marginBottom: 16,
    color: ({ theme }) => theme.palette.text
  },
  captionList: {
    display: "flex",
    listStyle: "none"
  },
  captionItem: {
    display: "flex",
    marginRight: 24,
    color: ({ theme }) => theme.palette.text
  },
  infoUser: {
    marginTop: 24,
    marginBottom: 16,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%"
  },
  itemUser: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    color: ({ theme }) => theme.palette.text
  },
  boldItem: {
    fontWeight: "bold",
    margin: "0 8px"
  }
});

export default useStyles;
