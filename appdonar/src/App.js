import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Donaciones from './components/Donaciones';
import Donar from './assets/donar';
import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Donaciones" element={<Donaciones />}></Route>
          <Route path="/donar" element={<Donar />}></Route>
          <Route path='*' element={<h1>404 Not Found</h1>} ></Route>
        </Route>
      </Routes>

    </BrowserRouter>

    
  );
}