import { Box, Tabs, Tab } from "@mui/material";
import { useContext, useState } from "react";
import classNames from "classnames";
import Header from "../../components/Header";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import TabAccountData from "../../components/TabAccountData";
import TabPersonalData from "../../components/TabPersonalData";

export default function Profile() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const [tabActive, setTabActive] = useState(0);

  return (
    <>
      <Header />
      <div className={classNames(classes.containerWrapper, classes.card)}>
        <Box sx={{ borderBottom: 1, borderColor: theme.palette.placeholder }}>
          <Tabs
            value={tabActive}
            onChange={(e, newTab) => setTabActive(newTab)}
            className={classes.tabs}>
            <Tab label="Dados da conta" className={classes.tab} />
            <Tab label="Informações pessoais" className={classes.tab} />
          </Tabs>
        </Box>
        <TabAccountData tabActive={tabActive} tabIndex={0} />
        <TabPersonalData tabActive={tabActive} tabIndex={1} />
      </div>
    </>
  );
}
