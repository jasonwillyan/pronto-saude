import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  select: {
    width: "100%",
    borderRadius: 15,
    color: ({ theme }) => theme.palette.text,
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: ({ theme }) => theme.palette.placeholder
      },
      "&.Mui-focused fieldset": {
        borderWidth: 2,
        borderColor: ({ theme }) => theme.palette.primaryColor
      }
    },
    "& fieldset": {
      borderColor: ({ theme }) => theme.palette.placeholder,
      color: ({ theme }) => theme.palette.placeholder
    }
  },
  option: {
    color: ({ theme }) => theme.palette.text,
    backgroundColor: ({ theme }) => theme.palette.white,
    "&.Mui-disabled": {
      backgroundColor: ({ theme }) => theme.palette.white
    }
  }
});

export default useStyles;
