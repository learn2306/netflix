import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import LoginPage from './pages/LoginPage';
import MovieDetail from './pages/MovieDetail';
import Navigation from './components/Navigation';

//1. 3개의 페이지를 생성 - home/movie/movie detail 페이지
//2. 홈페이지에서는 대표 배너를 볼 수 있다.
//3. 3가지 섹션의 영화를 볼 수 있다. (popular/top rated/upcoming)
//4. 각 영화에 마우스를 올리면 제목/장르/점수/인기도/청불여부 정보 제공
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.



function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />} ></Route>
        <Route path='/loginpage' element={<LoginPage />} ></Route>
        <Route path='/movies/:id' element={<MovieDetail />} ></Route>              
      </Routes>
     
    </div>
  );
}

export default App;
