import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Cadastro from '../src/pages/Cadastro'
import Planos from '../src/pages/Planos'
import Plano from '../src/pages/Plano'
import Home from '../src/pages/Home'

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Cadastro />} />
        <Route path="/subscriptions" element={<Planos />} />
        <Route path="/subscriptions/:planoId" element={<Plano />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default RoutersComponents
