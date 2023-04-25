import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Main from './Component/Main'
import Profile from './Component/Profile';
import { GetPass, Authorize} from './Component/GetPass';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/m' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<App/>}/>
        <Route path='/auth' element={<Authorize/>}/>
        <Route path='/resPass' element={<GetPass/>}/>
      </Routes>
    </BrowserRouter>
  //</React.StrictMode>
);


