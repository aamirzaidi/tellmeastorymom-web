import ReactDOM from "react-dom";
import React from "react";
import App from "./comp/App";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider} from "../src/comp/FirebaseAuthService/AuthContext";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>
    ,document.getElementById("root"));
