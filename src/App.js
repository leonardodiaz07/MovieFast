import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
      
<BrowserRouter>

<Header/>

 <Routes>

<Route path='/' element={<MovieListContainer/>}/>
<Route path='/detail/:movieID' element={<MovieDetail/>}/>


    
 </Routes>

</BrowserRouter>



  );
}

export default App;
