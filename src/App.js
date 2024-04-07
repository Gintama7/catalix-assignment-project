
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Analytics from './components/Analytics';

import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/stats' element={<Analytics/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;
