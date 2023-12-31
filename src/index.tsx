import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ListarAlunos from './componentes/listarAlunos/listarAlunos';
import UseStateTeste from './componentes/listarAlunos/useStateTeste/UseStateTeste';
import Card from './componentes/listarAlunos/input/input';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <ListarAlunos/> */}
    {/* <UseStateTeste/> */}
    <Card></Card>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
