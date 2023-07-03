import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  input: {
    borderRadius: 15,
    color: ({ theme }) => theme.palette.text
  },
  label: {
    color: ({ theme }) => theme.palette.text,
    fontWeight: 500,
    fontSize: "1em"
  }
});

export default useStyles;
