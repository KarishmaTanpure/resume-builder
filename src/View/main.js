import { connect } from "react-redux";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from '@mui/styles';
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import Switch from "@mui/material/Switch"; 
import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import { useState } from "react"; 
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import Form from "./Form/index.js"; 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarSpacer: {
    marginBottom: theme.spacing(4), 
  },
  switchContainer: {
    display: "flex",
    alignItems: "center",
  },
  pdfContainer: {
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff", 
    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", 
    minHeight: "500px", 
    padding: "20px",
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false); 

  
  const handleThemeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", 
    },
  });

  return (
    <ThemeProvider theme={theme}> 
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              RESUME BUILDER
            </Typography>
           
            <div className={classes.switchContainer}>
              <Typography variant="body2" style={{ marginRight: "10px" }}>
                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />} 
                Dark Mode
              </Typography>
              <Switch checked={darkMode} onChange={handleThemeChange} /> 
            </div>
          </Toolbar>
        </AppBar>

        <div className={classes.toolbarSpacer} />
        
        
        <div className={classes.pdfContainer}>
          <Form /> 
        </div>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MainPage);
