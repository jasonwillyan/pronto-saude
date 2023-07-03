import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function TextInput({ InputProps, placeholder, label, otherProps, initialValue }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const [value, setValue] = useState(initialValue || "");

  return (
    <TextField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      sx={{ width: "100%" }}
      size="small"
      label={label || null}
      InputProps={{
        ...InputProps,
        className: classes.input
      }}
      {...otherProps}
    />
  );
}
