import { Button, Grid } from "@mui/material";
import { useContext, forwardRef } from "react";
import { PatternFormat } from "react-number-format";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import TextInput from "../TextInput";
import useGlobalStyles from "../../styles";

const PhoneFormat = forwardRef((props, ref) => (
  <PatternFormat {...props} getInputRef={ref} format="(##) #####-####" />
));

export default function TabAccountData({ tabActive, tabIndex }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const globalClasses = useGlobalStyles({ theme });

  return (
    <div className={classes.tabpanel} role="tabpanel" hidden={tabActive !== tabIndex}>
      {tabActive === tabIndex && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextInput label="Nome" placeholder="Digite seu nome" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                InputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                label="Telefone"
                placeholder="Digite seu telefone"
                InputProps={{ inputComponent: PhoneFormat }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Nova senha"
                placeholder="Digite uma nova senha de no mínimo 8 caracteres"
                InputProps={{ type: "password" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Confirmar nova senha"
                placeholder="Digite novamente a senha inserida no campo anterior"
                InputProps={{ type: "password" }}
              />
            </Grid>
          </Grid>
          <Button className={globalClasses.primaryButton}>Salvar alterações</Button>
        </>
      )}
    </div>
  );
}
