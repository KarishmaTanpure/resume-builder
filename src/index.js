import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";


import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  spacing: 8, 
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  </Provider>,
  rootElement
);
