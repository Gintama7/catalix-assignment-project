
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/stats' element={<Analytics/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
