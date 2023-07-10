import { useContext, useState } from "react";
import classNames from "classnames";
import { Grid, Button, IconButton } from "@mui/material";
import { MdAdd, MdClose } from "react-icons/md";
import Header from "../../components/Header";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import especialidades from "../../data/especialidades";
import categories from "../../data/categories";
import classification from "../../data/classification";
import useGlobalStyles from "../../styles";

const EXAM = 1;
const SURGERY = 2;
const newItem = { name: "", description: "" };

export default function EditProcedure() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const globalClasses = useGlobalStyles({ theme });
  const [category, setCategory] = useState(0);
  const [recipeItems, setRecipeItems] = useState([newItem]);

  const addItem = () => {
    const newArray = [...recipeItems, newItem];
    setRecipeItems(newArray);
  };

  return (
    <>
      <Header />
      <div className={classNames(classes.containerWrapper, classes.card)}>
        <h2 className={classes.title}>Editar Procedimento</h2>
        <h3 className={classes.subtitle}>Informações gerais</h3>
        <Grid container>
          <Grid item xs={12} className={classes.row}>
            <TextInput label="Descrição" placeholder="Digite a descrição do procedimento" />
          </Grid>
          <Grid container spacing={2} className={classes.row}>
            <Grid item xs={12} lg={3}>
              <TextInput
                label="Data de nascimento"
                InputProps={{ type: "date" }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <SelectInput label="Especialidade" items={especialidades} all={false} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextInput label="Estabelecimento" placeholder="Digite o nome do estabelecimento" />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextInput label="Médico(a)" placeholder="Digite o nome do(a) médico(a)" />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.row}>
            <Grid item xs={12} lg={2}>
              <SelectInput
                label="Categoria"
                items={categories}
                all={false}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Grid>
            {category === EXAM && (
              <Grid item xs={12} lg={4}>
                <TextInput label="Tipo" placeholder="Digite o tipo do exame" />
              </Grid>
            )}
            {category === SURGERY && (
              <>
                <Grid item xs={12} lg={2}>
                  <SelectInput label="Classificação" items={classification} all={false} />
                </Grid>
                <Grid item xs={12} lg={2}>
                  <SelectInput
                    label="Anestesia"
                    items={[
                      { value: 1, label: "Sim" },
                      { value: 2, label: "Não" }
                    ]}
                    all={false}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={12} className={classes.row}>
            <TextInput label="Resultado" placeholder="Digite o resultado do procedimento" />
          </Grid>
        </Grid>
        <h3 className={classes.subtitle}>Tratamento</h3>
        <Grid container direction="column">
          <Grid container className={classes.row} spacing={2}>
            <Grid item xs={12} lg={3}>
              <SelectInput
                label="Urgência"
                items={[
                  { value: 1, label: "Sim" },
                  { value: 2, label: "Não" }
                ]}
                all={false}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextInput
                label="Duração do tratamento"
                placeholder="Digite a duração do tratamento"
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextInput label="Status" placeholder="Digite o status do tratamento" />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextInput label="Validade da receita" placeholder="Digite a validade da receita" />
            </Grid>
          </Grid>
          <h4 className={classes.titleH4}>Itens da receita</h4>
          <div className={classes.recipe}>
            {recipeItems.map((item, index) => (
              <div key={index} className={classes.recipeItems}>
                <TextInput
                  label="Nome"
                  placeholder="Digite o nome do item da receita"
                  initialValue={item.name}
                />
                <TextInput
                  label="Descrição"
                  placeholder="Digite a descrição do item da receita"
                  initialValue={item.description}
                />
                <IconButton>
                  <MdClose size={20} color={theme.palette.text} />
                </IconButton>
              </div>
            ))}
            <Button
              onClick={addItem}
              startIcon={<MdAdd size={20} color={theme.palette.primaryColor} />}
              className={globalClasses.primaryOutlineButton}>
              Adicionar item da receita
            </Button>
          </div>
        </Grid>
        <Button className={globalClasses.primaryButton}>Salvar</Button>
      </div>
    </>
  );
}
