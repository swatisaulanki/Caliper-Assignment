import logo from './logo.svg';
import './App.css';
import Mainroutes from './Components/Mainroutes';
import Navbar from './Components/Navbar';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage';
import Ourstory from './Pages/Ourstory';
import Hydrophanicfar from './Pages/Hydrophanicfar';
import Modernpage from './Pages/Modernpage';

function App() {
  return (
    <div className="App">
       {/* <Mainroutes/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
           <Route path="/ourtstory" element={<Ourstory/>}></Route>
           <Route path="/hydrophanicfar" element={<Hydrophanicfar/>}></Route>
           <Route path="/modern" element={<Modernpage/>}></Route>
            
        </Routes>
       </BrowserRouter>



    </div>
  );
}

export default App;
