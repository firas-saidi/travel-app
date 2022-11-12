import './App.css';
import Footer from './componments/Footer/Footer';
import Header from './componments/Header/Header';
import Home from './componments/Home/Home';
import {BrowserRouter as Router , Route,Routes} from "react-router-dom";
import Package from './Sections/Package/Package';
import Book from './Sections/Book/Book';
import About from './Sections/About/About';
function App() {
  return (
    <Router basename={'/travel-app'}>

      <Header/>
     <Routes>

      <Route exact path='/' element ={<Home/>}/>
      <Route path='/package' element={<Package/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      
      <Footer/>
    </Router>
  
  );
}

export default App;
