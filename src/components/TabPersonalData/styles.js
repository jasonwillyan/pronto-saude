import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tabpanel: {
    marginTop: 32
  },
  grid: {
    marginTop: 8
  },
  subtitle: {
    marginBottom: 16,
    fontWeight: 500,
    fontSize: "1em",
    color: ({ theme }) => theme.palette.text
  },
  marginBottom: {
    marginBottom: 12
  }
});

export default useStyles;
