import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Layout from './layout.js'

ReactDOM.render(<Layout />, document.querySelector("#app"));

/*
import {createRoot} from 'react-dom/client'
const root = createRoot(document.querySelector("#app"))
root.render(<Layout/>)
*/
