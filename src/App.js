import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchProduct from './components/SearchProduct';
import ViewAll from './components/ViewallProducts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProducts/>}/>
      <Route path="/search" element={<SearchProduct/>}/>
      <Route path="/viewall" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
