import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';


function App() {


  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar/>
      <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/articles/:articleId' element={<ArticlePage/>}/>
            <Route path='/articles' element={<ArticlesListPage/>}/>
            <Route path='/about' element={<About/> }/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>

      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
