/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import ComShowBlogs from './blog/ShowBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComCreateBlogs from './blog/CreateBlogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComShowBlogs/>}/>
        <Route path='/create' element={<ComCreateBlogs/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
