import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Gridview';
import Header from './Header';
import Listview from './Listview';
import Gridview from './Gridview'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<Listview/>}/>
        <Route path='/grid' element={<Gridview/>}/>
      </Routes>
    </Router>
  );
}

export default App;
