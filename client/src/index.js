import "react-app-polyfill/ie9";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import store from "./services/store";

const element = (
    <Provider store={store}>
        <Router>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </Router>
    </Provider>
);

ReactDOM.render(element, document.getElementById("root"));
