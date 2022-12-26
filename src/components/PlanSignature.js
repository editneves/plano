import Container from './Container'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'
import { useParams } from 'react-router'

const PlanSignature = () => {
  const { planoId } = useParams()
  const { creditCard, setCreditCard } = useContext(AuthContext)

  const handleForm = (e) => {
    setCreditCard({
      ...creditCard,
      [e.target.name]: e.target.value,
      membershipId: planoId,
    })
  }

  const doRequest = async () => {
    try {
      const req = await axios.post(`${BASE_URL}/subscriptions`, creditCard, {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      })
      const { status } = req
      console.log('asdasda ' + status)
    } catch (err) {
      console.log(err)
    }
  }

  const assignToPlan = (e) => {
    e.preventDefault()
    doRequest()
  }

  return (
    <>
      <Container>
        <form onSubmit={assignToPlan}>
          <input
            onChange={handleForm}
            type="text"
            name="cardName"
            placeholder="Nome impresso no cartão"
            required
          />

          <input
            onChange={handleForm}
            type="text"
            name="cardNumber"
            placeholder="Dígitos do cartão"
            required
          />

          <div className="custom-row">
            <input
              onChange={handleForm}
              className="custom-input"
              type="text"
              name="securityNumber"
              placeholder="Código de segurança"
              required
            />

            <input
              onChange={handleForm}
              className="custom-input"
              type="text"
              name="expirationDate"
              placeholder="Validade"
              required
            />
          </div>

          <button type="submit">ASSINAR</button>
        </form>
      </Container>
    </>
  )
}

export default PlanSignature
