import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// Switch คือการควบคุมแอพพลิเคชั่นของเราถูกกำหนดเส้นทาง ไปที่เส้นทางใด
// Route คือการกำหนดเส้นทาง
import Home from "./components/page/Home";
import Member from "./components/page/Member"
import Product from "./components/page/Product";

import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/member" element={<Member/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
