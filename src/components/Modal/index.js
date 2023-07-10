import { useContext } from "react";
import { Modal as MuiModal, Box, IconButton, Grid, Button } from "@mui/material";

import { MdClose, MdTextSnippet } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import useStyles from "./styles";
import useGlobalStyles from "../../styles";

export default function Modal({ open, closeModal }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const globalClasses = useGlobalStyles({ theme });

  return (
    <MuiModal open={open} onClose={closeModal} className={classes.modalContainer}>
      <Box className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h2 className={classes.title}>Ver procedimento</h2>
          <IconButton onClick={closeModal}>
            <MdClose size={24} color={theme.palette.text} />
          </IconButton>
        </div>
        <h3 className={classes.subtitle}>Informações gerais</h3>
        <Grid container sx={{ mt: 2, mb: 2 }}>
          <Grid item xs={12} className={classes.row}>
            <div className={classes.label}>Descrição</div>
            <div className={classes.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </Grid>
          <Grid container className={classes.row} spacing={2} wrap="wrap">
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Data</div>
              <div className={classes.content}>21/06/2023</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Especialidade</div>
              <div className={classes.content}>Ortopedia</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Establecimento</div>
              <div className={classes.content}>Lorem ipsum</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Médico(a)</div>
              <div className={classes.content}>Fulana da Silva</div>
            </Grid>
          </Grid>
          <Grid container className={classes.row} spacing={2} wrap="wrap">
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Categoria</div>
              <div className={classes.content}>Cirurgia</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Classificação</div>
              <div className={classes.content}>Eletiva</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Anestesia</div>
              <div className={classes.content}>Não</div>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.row}>
            <div className={classes.label}>Resultado</div>
            <div className={classes.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </Grid>
          <Button
            className={classes.fileButton}
            variant="text"
            startIcon={<MdTextSnippet size={24} color={theme.palette.primaryColor} />}>
            Ver arquivo de procedimento
          </Button>
        </Grid>
        <h3 className={classes.subtitle}>Tratamento</h3>
        <Grid container sx={{ mt: 2 }}>
          <Grid container className={classes.row} spacing={2} wrap="wrap">
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Urgência</div>
              <div className={classes.content}>Sim</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Tempo</div>
              <div className={classes.content}>2 meses</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Status</div>
              <div className={classes.content}>Lorem ipsum</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.label}>Validade da receita</div>
              <div className={classes.content}>30 dias</div>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.row}>
            <div className={classes.label}>Itens da receita</div>
            <div className={classes.content}>
              <ol className={classes.list}>
                <li>
                  Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ol>
            </div>
          </Grid>
          <Button
            className={classes.fileButton}
            variant="text"
            startIcon={<MdTextSnippet size={24} color={theme.palette.primaryColor} />}>
            Ver arquivo da receita
          </Button>
        </Grid>
        <Grid container justifyContent="end" columnGap={2}>
          <Button className={globalClasses.deleteButton}>Excluir procedimento</Button>
          <Link to="/edit-procedure" className={globalClasses.primaryButton}>
            Editar procedimento
          </Link>
        </Grid>
      </Box>
    </MuiModal>
  );
}
