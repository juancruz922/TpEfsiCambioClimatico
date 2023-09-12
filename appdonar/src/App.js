import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Donar from './assets/donar';
import Datos from './assets/datos';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donar" element={<Donar />}></Route>
        <Route path="/datos" element={<Datos />}></Route>
       
       
      </Routes>

    </BrowserRouter>

    
  );
}