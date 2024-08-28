import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProducts/>}/>
      <Route path="/search" element={<SearchProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
