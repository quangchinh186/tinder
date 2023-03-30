import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from './Signup';
import Login from './Login';
import Main from './Main'
import { GetPass, Authorize} from './GetPass';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/m' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<App/>}/>
        <Route path='/auth' element={<Authorize/>}/>
        <Route path='/resPass' element={<GetPass/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


