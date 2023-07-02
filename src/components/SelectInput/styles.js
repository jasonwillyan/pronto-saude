import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  select: {
    width: "100%",
    borderRadius: 15,
    fontFamily: "'Fira Sans', sans-serif",
    color: ({ theme }) => theme.palette.text
  },
  option: {
    fontFamily: "'Fira Sans', sans-serif",
    color: ({ theme }) => theme.palette.text
  }
});

export default useStyles;
