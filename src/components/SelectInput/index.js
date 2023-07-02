import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useContext } from "react";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SelectInput({ label, items }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });

  return (
    <Select defaultValue={-1} className={classes.select}>
      <MenuItem value={-1} disabled className={classes.option}>
        {label}
      </MenuItem>
      <MenuItem value={0} className={classes.option}>
        Todas
      </MenuItem>
      {items.map((item) => (
        <MenuItem value={item.value} className={classes.option}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
