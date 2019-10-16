
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from './routes';
import Store from "./store";
import Theme from "./styles/theme";
import { GlobalStyle } from './styles/global';


import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


const Main = () => {
    return (
      <Provider store={Store}>
          <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <Router history={history}>
                  <Routes />
            </Router>
            <ToastContainer/>
          </ThemeProvider>
      </Provider>
    );
  };


export default Main;