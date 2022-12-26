import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Cadastro from '../src/pages/Cadastro'
import Planos from '../src/pages/Planos'
import Plano from '../src/pages/Plano'

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Cadastro />} />
        <Route path="/subscriptions" element={<Planos />} />
        <Route path="/subscriptions/:planoId" element={<Plano />} />
      </Routes>
    </Router>
  )
}

export default RoutersComponents
