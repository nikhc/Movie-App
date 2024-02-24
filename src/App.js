import logo from './logo.svg';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

import Movies from './components/Movies';
import Favourite from './components/Favourite';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
     <Route path="/" element={[<Banner/>,<Movies/>]} />
     <Route path='/favourites' element={<Favourite/>} />
   </Routes>
      </BrowserRouter>

   
    </div>

  
  

   
    
  )
}

export default App;
