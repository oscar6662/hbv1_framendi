import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './stores/mainStore';
import { Auth0Provider } from '@auth0/auth0-react'
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
          domain="dev-xzuj3qsd.eu.auth0.com"
          clientId="ox325QZVYQitbySZYq0CZOW5vJLs9r4Q"
          redirectUri={'http://localhost:5173'}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
