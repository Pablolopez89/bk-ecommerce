import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;