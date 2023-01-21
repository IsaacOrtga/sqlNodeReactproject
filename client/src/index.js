import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Main />
</BrowserRouter>
);

