import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Preview from './Preview'
import Main from './Main';


function App() {
  return (
    <Routes>
      <Route path='/m' element={<Preview/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Main/>}/>
    </Routes>
  );
}

export default App;
