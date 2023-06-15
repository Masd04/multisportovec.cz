import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Deti from './pages/Deti';
import Dospeli from './pages/Dospeli';
import Tym from './pages/Tym';
import Event_prihlaska from './pages/Event_prihlaska';
import Krouzek_prihlaska from './pages/Krouzek_prihlaska';
import styles from "./style";

function App() {
  return (
    <Router basename={"/multisportovec.cz"}>
    
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll bg-gray-200">
    
    <div className="w-full overflow-hidden">

    <div className={`bg-primary ${styles.padingX} ${styles.flexCenter}`}>
      <div className={`text-white ${styles.boxWidth} fixed top-0 z-10`}>
        <Navbar />
      </div>
    </div>


      <div className={`${styles.flexStart} ${styles.paddingY}`}>
        <div className={`${styles.paddingY} ${styles.boxWidth}`}>              
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/deti" element={<Deti />} />
        <Route path="/dospeli" element={<Dospeli />} />
        <Route path="/tym" element={<Tym />} />
        <Route path="/event_prihlaska" element={<Event_prihlaska />} />
        <Route path="/krouzek_prihlaska" element={<Krouzek_prihlaska />} />
      </Routes>
        </div>
      </div>

      

      


    </div>

    </div>
    
    </Router>
  )
}

export default App