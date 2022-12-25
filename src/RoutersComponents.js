import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Plano from "../src/pages/Plano";
import Planos from "../src/pages/Planos";
import Rota from "../src/pages/Rota";

function RoutersComponents(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/sign-up" element={<Cadastro />} /> 
        {/* <Route path="/subscriptions" element={<Planos />} /> */}
        {/* <Route path="/subscriptions:id" element={<Plano />} /> */}
      </Routes>
    </Router>
  )
}

export default RoutersComponents;
