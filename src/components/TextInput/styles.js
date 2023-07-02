import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  input: {
    borderRadius: 15,
    fontFamily: "'Fira Sans', sans-serif",
    color: ({ theme }) => theme.palette.text
  }
});

export default useStyles;
