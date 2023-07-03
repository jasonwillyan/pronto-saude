import { Button, Grid, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import useStyles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import useGlobalStyles from "../../styles";

const newAllergy = { name: "", value: -1 };
const newIllness = { name: "", value: -1 };
const newMedicine = { name: "" };

export default function TabPersonalData({ tabActive, tabIndex }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ theme });
  const globalClasses = useGlobalStyles({ theme });
  const [allergies, setAllergies] = useState([newAllergy]);
  const [illnesses, setIllnesses] = useState([newIllness]);
  const [medicines, setMedicines] = useState([newMedicine]);

  const FormItem = ({ item, onClickRemoveItem }) => (
    <Grid container spacing={1} className={classes.marginBottom}>
      <Grid item xs={8}>
        <TextInput label="Nome" initialValue={item.name} />
      </Grid>
      <Grid item xs={3}>
        <SelectInput
          value={item.value}
          label="Grau"
          items={[
            { value: 1, label: "Leve" },
            { value: 2, label: "Moderado" },
            { value: 3, label: "Grave" }
          ]}
          all={false}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={onClickRemoveItem}>
          <MdClose size={24} color={theme.palette.text} />
        </IconButton>
      </Grid>
    </Grid>
  );

  const FormItemMedicine = ({ item, onClickRemoveItem }) => (
    <Grid container spacing={1} className={classes.marginBottom}>
      <Grid item xs={11}>
        <TextInput label="Nome" initialValue={item.name} />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={onClickRemoveItem}>
          <MdClose size={24} color={theme.palette.text} />
        </IconButton>
      </Grid>
    </Grid>
  );

  const ButtonAddItem = ({ item, onClick }) => (
    <Button
      onClick={onClick}
      startIcon={<MdAdd size={20} color={theme.palette.primaryColor} />}
      className={globalClasses.primaryOutlineButton}>
      Adicionar {item}
    </Button>
  );

  const addItem = (array, newItem, cb) => {
    const newArray = [...array, newItem];
    cb(newArray);
  };

  const removeItem = (array, indexDeleted, cb) => {
    const newArray = array.filter((e, index) => index !== indexDeleted);
    cb(newArray);
  };

  return (
    <div className={classes.tabpanel} role="tabpanel" hidden={tabActive !== tabIndex}>
      {tabActive === tabIndex && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextInput label="Tipo sanguíneo" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                label="Data de nascimento"
                InputProps={{ type: "date" }}
                otherProps={{ InputLabelProps: { shrink: true } }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={6}>
              <div className={classes.subtitle}>Alergias</div>
              {allergies.map((allergy, index) => (
                <FormItem
                  item={allergy}
                  key={index}
                  onClickRemoveItem={() => removeItem(allergies, index, setAllergies)}
                />
              ))}
              <ButtonAddItem
                item="alergia"
                onClick={() => addItem(allergies, newAllergy, setAllergies)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.subtitle}>Comorbidades</div>
              {illnesses.map((illness, index) => (
                <FormItem
                  item={illness}
                  key={index}
                  onClickRemoveItem={() => removeItem(illnesses, index, setIllnesses)}
                />
              ))}
              <ButtonAddItem
                item="comorbidade"
                onClick={() => addItem(illnesses, newIllness, setIllnesses)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={6}>
              <div className={classes.subtitle}>Medicamentos</div>
              {medicines.map((medicine, index) => (
                <FormItemMedicine
                  item={medicine}
                  key={index}
                  onClickRemoveItem={() => removeItem(medicines, index, setMedicines)}
                />
              ))}

              <ButtonAddItem
                item="medicamento"
                onClick={() => addItem(medicines, newMedicine, setMedicines)}
              />
            </Grid>
          </Grid>
          <Button className={globalClasses.primaryButton}>Salvar alterações</Button>
        </>
      )}
    </div>
  );
}
