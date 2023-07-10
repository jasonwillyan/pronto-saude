import { useCallback, useContext, useEffect, useState } from "react";
import {
  Grid,
  InputAdornment,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TablePagination
} from "@mui/material";
import classNames from "classnames";
import { MdAccountCircle, MdBloodtype, MdCalendarToday, MdOutlineSearch } from "react-icons/md";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import useStyles from "./styles";
import Header from "../../components/Header";
import useGlobalStyles from "../../styles";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import Modal from "../../components/Modal";

export default function UserHome() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const globalClasses = useGlobalStyles({ theme });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { user } = useAuth();

  const [procedures, setProcedures] = useState([]);

  const getAllProcedures = useCallback(async () => {
    const response = await api.get("procedures");

    setProcedures(response.data);
  }, []);

  useEffect(() => {
    getAllProcedures();
  }, []);

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
              <Table
                sx={{ width: "100%" }}
                aria-label="Histórico de procedimentos"
                className={classes.table}>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Categoria</TableCell>
                    <TableCell className={classes.tableCell}>Especialidade</TableCell>
                    <TableCell className={classes.tableCell}>Descrição</TableCell>
                    <TableCell className={classes.tableCell}>Data</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {procedures.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.tableCell}>{row.category}</TableCell>
                      <TableCell className={classes.tableCell}>{row.specialty}</TableCell>
                      <TableCell
                        className={classNames(classes.tableCell, classes.link)}
                        onClick={openModal}>
                        {row.description}
                      </TableCell>
                      <TableCell className={classes.tableCell}>{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={6}
                rowsPerPage={-1}
                page={0}
                onPageChange={() => {}}
                onRowsPerPageChange={() => {}}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.column}>
            <Grid container direction="column" alignItems="center" className={classes.card}>
              <MdAccountCircle color={theme.palette.text} size={80} />
              <h2 className={classNames(classes.title, classes.titleCenter)}>{user.name}</h2>
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
              <Link to="/profile" className={globalClasses.primaryButton}>
                Editar perfil
              </Link>
              <Link to="/new-procedure" className={globalClasses.primaryButton}>
                Cadastrar procedimento
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Modal open={isModalOpen} closeModal={closeModal} />
    </>
  );
}
