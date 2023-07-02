import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    height: "6vh",
    width: "100vw",
    position: "fixed",
    inset: "0",
    backgroundColor: ({ theme }) => theme.white,
    display: "flex",
    alignItems: "center",
    "& h1": {
      marginLeft: "15%",
      fontSize: 32,
      fontWeight: "600",
      color: ({ theme }) => theme.text
    }
  }
});

export default useStyles;

/* export default {
  '@global': {
    '#header': 
    '#header h1': {
      marginLeft: '15%',
      fontSize: 32,
      fontWeight: '600',
      color: 'var(--color-title)'
    },
    '#exit:hover': {
      cursor: 'pointer'
    },
    button: {
      marginLeft: '1%',
      appearance: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: 25,
      color: 'var(--color-black)'
    },
    'input[type="checkbox"]': {
      height: '0',
      width: '0',
      visibility: 'hidden',
      marginLeft: '45%'
    },
    label: {
      cursor: 'pointer',
      textIndent: -9999,
      width: 50,
      height: 25,
      background: 'grey',
      display: 'block',
      borderRadius: 25,
      position: 'relative'
    },
    'label::after': {
      content: '""',
      position: 'absolute',
      top: 1.25,
      left: 1.25,
      width: 22.5,
      height: 22.5,
      background: '#fff',
      borderRadius: 22.5,
      transition: '0.3s'
    },
    'input:checked + label': {
      background: '#bada55'
    },
    'label:active::after': {
      width: 32.5
    },
    'input:checked + label::after': {
      left: 'calc(100% - 1.25px)',
      transform: 'translateX(-100%)'
    },
    '.container-wrapper': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    '.left-column, .right-column': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '33%'
    },
    '.left-container, .right-container': {
      backgroundColor: '#000',
      borderRadius: 10,
      marginBottom: '5%'
    },
    '.left-container': {
      backgroundColor: 'white',
      width: '40vw',
      height: '30vh',
      display: 'flex'
    },
    '.right-container': {
      backgroundColor: 'white',
      width: '20vw',
      height: '30vh'
    },
    '#info': {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative'
    },
    '.nested-container': {
      backgroundColor: 'transparent',
      width: '50%',
      height: '70%',
      borderRadius: 10
    },
    '.nested-container i': {
      marginRight: '5%'
    },
    '.nested-container h4': {
      fontWeight: 'bold',
      marginLeft: '8%'
    },
    '#info h6': {
      marginTop: '27%',
      marginLeft: '2%',
      position: 'absolute',
      fontWeight: '700',
      fontSize: 12
    },
    '.allergies-list': {
      listStyleType: 'none',
      marginLeft: '-8%',
      marginTop: '-2%'
    },
    '.allergies-list li': {
      marginBottom: '2%'
    },
    '.severity-box': {
      display: 'inline-block',
      width: '1vw',
      height: '1.4vh',
      marginRight: 5,
      borderRadius: 3
    },
    '.severity-low': {
      backgroundColor: '#f2c94c'
    },
    '.severity-medium': {
      backgroundColor: '#f2994a'
    },
    '.severity-high': {
      backgroundColor: '#eb5757'
    }
  }
};
*/
