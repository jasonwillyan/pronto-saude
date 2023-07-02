import { TextField } from "@mui/material";
import { useContext } from "react";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function TextInput({ InputProps, placeholder }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  return (
    <TextField
      placeholder={placeholder}
      sx={{ width: "100%" }}
      InputProps={{
        ...InputProps,
        className: classes.input
      }}
    />
  );
}
