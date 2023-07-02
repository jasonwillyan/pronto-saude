import { useContext } from "react";
import { Button, Grid, InputAdornment } from "@mui/material";
import classNames from "classnames";
import { MdAccountCircle, MdBloodtype, MdCalendarToday, MdOutlineSearch } from "react-icons/md";

import { ThemeContext } from "../../contexts/ThemeContext";
import useStyles from "./styles";
import Header from "../../components/Header";
import useGlobalStyles from "../../styles";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

export default function UserHome() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const globalClasses = useGlobalStyles({ theme });

  return (
    <>
      <Header />

      <div className={classes.containerWrapper}>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} lg={8} className={classes.column}>
            <Grid container direction="column" className={classes.card}>
              <Grid container wrap="wrap">
                <Grid item xs={12} sm={6} md={4}>
                  <h2 className={classes.title}>Alergias</h2>
                  <ul className={classes.list}>
                    <li className={classes.item}>
                      <div
                        className={classNames(classes.captionIndicator, {
                          [classes.severityLow]: true
                        })}
                        aria-hidden
                      />
                      <span>Poeira</span>
                    </li>
                    <li className={classes.item}>
                      <div
                        className={classNames(classes.captionIndicator, {
                          [classes.severityMedium]: true
                        })}
                        aria-hidden
                      />
                      <span>Poeira</span>
                    </li>
                    <li className={classes.item}>
                      <div
                        className={classNames(classes.captionIndicator, {
                          [classes.severityHigh]: true
                        })}
                        aria-hidden
                      />
                      <span>Poeira</span>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <h2 className={classes.title}>Comorbidades</h2>
                  <ul className={classes.list}>
                    <li className={classes.item}>
                      <div
                        className={classNames(classes.captionIndicator, {
                          [classes.severityLow]: true
                        })}
                        aria-hidden
                      />
                      <span>Hipertensão</span>
                    </li>
                    <li className={classes.item}>
                      <div
                        className={classNames(classes.captionIndicator, {
                          [classes.severityMedium]: true
                        })}
                        aria-hidden
                      />
                      <span>Hipertensão</span>
                    </li>
                    <li className={classes.item}>
                      <div
                        className={classNames(classes.captionIndicator, {
                          [classes.severityHigh]: true
                        })}
                        aria-hidden
                      />
                      <span>Hipertensão</span>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <h2 className={classes.title}>Medicamentos</h2>
                  <ul className={classes.medicineContainer}>
                    <li className={classes.medicineItem}>
                      <span>Lorem ipsum dolor, 10mL</span>
                    </li>
                    <li className={classes.medicineItem}>
                      <span>Lorem ipsum dolor, 10mL</span>
                    </li>
                    <li className={classes.medicineItem}>
                      <span>Lorem ipsum dolor, 10mL</span>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <Grid container direction="column" className={classes.caption} aria-hidden>
                <h3 className={classes.captionTitle}>Legenda</h3>
                <ul className={classes.captionList}>
                  <li className={classes.captionItem}>
                    <div
                      className={classNames(classes.captionIndicator, {
                        [classes.severityLow]: true
                      })}
                      aria-hidden
                    />
                    <span>Leve</span>
                  </li>
                  <li className={classes.captionItem}>
                    <div
                      className={classNames(classes.captionIndicator, {
                        [classes.severityMedium]: true
                      })}
                      aria-hidden
                    />
                    <span>Moderado</span>
                  </li>
                  <li className={classes.captionItem}>
                    <div
                      className={classNames(classes.captionIndicator, {
                        [classes.severityHigh]: true
                      })}
                      aria-hidden
                    />
                    <span>Grave</span>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" className={classes.card}>
              <h2 className={classes.title}>Histórico de procedimentos</h2>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <TextInput
                    placeholder="Buscar por descrição"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MdOutlineSearch color={theme.palette.primaryColor} size={24} />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={3}>
                  <SelectInput
                    label="Categoria"
                    items={[
                      { value: 1, label: "Exame" },
                      { value: 2, label: "Cirurgia" }
                    ]}
                  />
                </Grid>
                <Grid item xs={12} lg={3}>
                  <SelectInput
                    label="Especialidade"
                    items={[
                      { value: 1, label: "Ortopedia" },
                      { value: 2, label: "Cardiologia" }
                    ]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.column}>
            <Grid container direction="column" alignItems="center" className={classes.card}>
              <MdAccountCircle color={theme.palette.text} size={80} />
              <h2 className={classNames(classes.title, classes.titleCenter)}>Nome do usuário</h2>
              <div className={classes.infoUser}>
                <div className={classes.itemUser}>
                  <MdCalendarToday size={24} />
                  <span className={classes.boldItem}>Idade:</span>
                  <span>21 anos</span>
                </div>
                <div className={classes.itemUser}>
                  <MdBloodtype size={24} />
                  <span className={classes.boldItem}>Tipo sanguíneo:</span>
                  <span>O+</span>
                </div>
              </div>
              <Button className={globalClasses.primaryButton}>Editar perfil</Button>
              <Button className={globalClasses.primaryButton}>Cadastrar procedimento</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
