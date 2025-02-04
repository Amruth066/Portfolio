// import './App.scss';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (
    <BrowserRouter>
    <Layout/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          {<Route path='/about' element={<About/>}/>}
          {<Route path='/contact' element={<Contact/>}/>}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
