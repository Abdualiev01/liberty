import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Category from './pages/Category';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Cart from './pages/Cart/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/favorite' element={<Favorite/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/category/:type' element={<Category/>} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
