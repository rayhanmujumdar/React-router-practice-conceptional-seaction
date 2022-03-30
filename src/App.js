import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Coin from './Components/Coin/Coin';
import CoinDetail from './Components/CoinDetail/CoinDetail';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/Not Found/NotFound';

function App() {
  return (
    <div className='text-center'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/coin/:coinId' element={<Coin></Coin>}></Route>
        <Route path='/coin-detail/:detailId' element={<CoinDetail></CoinDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
