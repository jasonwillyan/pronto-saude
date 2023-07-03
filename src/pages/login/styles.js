import { createUseStyles } from "react-jss";

import background from "../../assets/img-01.jpg";
import enumTheme from "../../utils/theme/enumTheme";

const formHolder = {
  borderRadius: 15,
  border: "1px solid",
  overflow: "hidden",
  marginTop: 50,
  opacity: 1,
  visibility: "visible",
  transition: "all 0.3s ease"
};
const input = {
  border: 0,
  outline: "none",
  boxShadow: "none",
  display: "block",
  height: "fit-content",
  padding: "16px 20px",
  borderBottom: "1px solid",
  width: "100%",
  fontSize: 12,
  "&:last-child": {
    borderBottom: 0
  },
  "&::placeholder": {
    color: ({ theme }) => theme.palette.placeholder
  }
};
const submitBtn = {
  border: 0,
  borderRadius: 15,
  display: "block",
  margin: "15px auto",
  padding: "15px 45px",
  width: "100%",
  fontSize: 13,
  fontWeight: "bold",
  cursor: "pointer",
  opacity: 1,
  visibility: "visible",
  transition: "all 0.3s ease",
  "&:hover": {
    transition: "all 0.3s ease",
    filter: "none"
  }
};
const center = {
  position: "absolute",
  top: "calc(50% - 10%)",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  zIndex: 5,
  transition: "all 0.3s ease"
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
  logo: {
    backgroundSize: "cover",
    position: "relative",
    width: 350,
    height: 100,
    zIndex: 2,
    color: ({ theme }) => theme.palette.secondaryColor,
    lineHeight: 0.4
  },
  nameApp: {
    height: 90,
    width: 240,
    marginLeft: "29%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& span": {
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 16,
      marginBottom: 16
    },
    "& p": {
      fontSize: 14
    }
  },
  imageLogo: {
    objectFit: "cover",
    marginTop: "-26%",
    marginLeft: "1%",
    width: 90,
    height: 90
  },
  formStructor: {
    backgroundColor: ({ theme }) => theme.palette.text,
    borderRadius: 15,
    height: 550,
    width: 350,
    position: "relative",
    overflow: "hidden",
    margin: "1% 0 0",
    zIndex: 1,
    "&::after": {
      content: "''",
      opacity: ({ theme }) => (theme.name === enumTheme.light ? 0.8 : 1),
      position: "absolute",
      inset: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left bottom",
      backgroundSize: "cover",
      backgroundImage: ({ theme }) => (theme.name === enumTheme.light ? `url(${background})` : ""),
      backgroundColor: ({ theme }) => theme.palette.background
    }
  },
  login: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    zIndex: 5,
    transition: "all 0.3s ease",
    "& .form-title": {
      color: ({ theme }) => theme.palette.textWhite,
      fontSize: "1.7em",
      textAlign: "center"
    },
    "& .form-holder": {
      ...formHolder,
      backgroundColor: ({ theme }) => theme.palette.white,
      borderColor: ({ theme }) => theme.palette.placeholder,
      "& .input": {
        ...input,
        backgroundColor: ({ theme }) => theme.palette.white,
        borderColor: ({ theme }) => theme.palette.placeholder
      }
    },
    "& .submit-btn": {
      ...submitBtn,
      color: ({ theme }) => theme.palette.white,
      backgroundColor: ({ theme }) => theme.palette.secondaryColor
    },
    "&.slide-up": {
      top: "5%",
      transform: "translate(-50%, 0%)",
      transition: "all 0.3s ease",
      "& .form-holder, .submit-btn": {
        opacity: 0,
        visibility: "hidden"
      },
      "& .form-title": {
        fontSize: "1em",
        cursor: "pointer"
      }
    }
  },
  signUp: {
    position: "absolute",
    inset: "20% 0 0",
    backgroundColor: ({ theme }) => theme.palette.white,
    zIndex: 5,
    transition: "all 0.3s ease",
    "&::before": {
      content: "''",
      position: "absolute",
      left: "50%",
      top: -20,
      transform: "translate(-50%, 0%)",
      backgroundColor: ({ theme }) => theme.palette.white,
      width: "200%",
      height: 250,
      borderRadius: "50%",
      zIndex: 4,
      transition: "all 0.3s ease"
    },
    "& .center": {
      ...center,
      "& .form-title": {
        color: ({ theme }) => theme.palette.text,
        textAlign: "center"
      },
      "& .form-holder": {
        ...formHolder,
        backgroundColor: ({ theme }) => theme.palette.white,
        borderColor: ({ theme }) => theme.palette.placeholder,
        "& .input": {
          ...input,
          backgroundColor: ({ theme }) => theme.palette.white,
          borderColor: ({ theme }) => theme.palette.placeholder
        }
      },
      "& .submit-btn": {
        ...submitBtn,
        color: ({ theme }) => theme.palette.white,
        backgroundColor: ({ theme }) => theme.palette.secondaryColor
      }
    },
    "&.slide-up": {
      top: "90%",
      transition: "all 0.3s ease",
      "& .submit-btn, .form-holder": {
        opacity: 0,
        visibility: "hidden",
        transition: "all 0.3s ease"
      },
      "& .center": {
        top: "10%",
        transform: "translate(-50%, 0%)",
        transition: "all 0.3s ease"
      },
      "& .form-title": {
        fontSize: "1em",
        margin: 0,
        padding: 0,
        cursor: "pointer",
        transition: "all 0.3s ease"
      }
    }
  },

  "@media (width <= 768px)": {
    logo: {
      top: "0%"
    }
  }
});

export default useStyles;
