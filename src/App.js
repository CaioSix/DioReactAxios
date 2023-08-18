import React from "react";
import { BrowserRouter as Router,
Routes, Route,  } from "react-router-dom";

import Home from './pages/home'
import Login from './pages/login'
import Teste from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>  
    </Router>
  );
}

export default App;
