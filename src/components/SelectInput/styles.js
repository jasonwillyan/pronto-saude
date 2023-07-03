import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  select: {
    width: "100%",
    borderRadius: 15,
    color: ({ theme }) => theme.palette.text
  },
  option: {
    color: ({ theme }) => theme.palette.text
  }
});

export default useStyles;
