import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  input: {
    borderRadius: 15,
    color: ({ theme }) => theme.palette.text
  }
});

export default useStyles;
