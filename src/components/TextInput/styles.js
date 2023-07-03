import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  input: {
    borderRadius: 15,
    "& fieldset": {
      borderColor: ({ theme }) => theme.palette.placeholder,
      color: ({ theme }) => theme.palette.placeholder
    }
  },
  textField: {
    "& .MuiOutlinedInput-input": {
      color: ({ theme }) => theme.palette.text
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: ({ theme }) => theme.palette.placeholder
      },
      "&.Mui-focused fieldset": {
        borderWidth: 2,
        borderColor: ({ theme }) => theme.palette.primaryColor
      }
    }
  },
  label: {
    color: ({ theme }) => theme.palette.text,
    fontSize: "1em",
    "&.Mui-focused": {
      color: ({ theme }) => theme.palette.primaryColor
    }
  }
});

export default useStyles;
