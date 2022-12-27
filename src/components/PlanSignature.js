import { AuthContext } from './AuthContext'
import { useContext, useEffect } from 'react'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function PlanSignature() {
  const { planoId } = useParams()
  const { creditCard, setCreditCard } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    document.getElementById('modal-confirm-assign').style.visibility = 'hidden'
  }, [])

  const confirmModalNo = () => {
    document.getElementById('modal-confirm-assign').style.visibility = 'hidden'
  }

  const confirmModalYes = () => {
    doRequest()
  }

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
      if (status === 201) {
        navigate('/home')
      } else {
        // Nothing todo
      }
    } catch (err) {
      console.log(err)
    }
  }

  const assignToPlan = (e) => {
    e.preventDefault()
    document.getElementById('modal-confirm-assign').style.visibility = 'visible'
  }

  return (
    <>
      <Container>
        <Modal id="modal-confirm-assign">
          <ModalContent>
            <ModalContentTitle>
              Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?
            </ModalContentTitle>
            <ModalContentActions>
              <button
                onClick={confirmModalNo}
                className="button-modal button-modal-no"
              >
                Não
              </button>
              <button
                onClick={confirmModalYes}
                className="button-modal button-modal-yes"
              >
                SIM
              </button>
            </ModalContentActions>
          </ModalContent>
        </Modal>

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

          <button className="button-assign" type="submit">
            <p>ASSINAR</p>
          </button>
        </form>
      </Container>
    </>
  )
}

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 383px;
  height: 674px;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background-color: white;
  width: 248px;
  height: 210px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ModalContentTitle = styled.div`
  width: 204px;
  height: 67px;
  margin-top: 33px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`

const ModalContentActions = styled.div`
  margin-top: 47px;
`

const Container = styled.div`
  width: 299px;
  height: auto;
  margin-bottom: 34px;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 100px;
    width: 299px;
    height: 49px;
    left: 38px;
    top: 134px;
  }

  input {
    margin-top: 16px;
    width: 299px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
  }

  .custom-row {
    display: flex;
    flex-direction: row;
    width: 307px;
    justify-content: space-between;
  }

  .custom-input {
    width: 140px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
  }

  .button-assign {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #000000;
    }
  }

  .button-modal {
    width: 95px;
    height: 52px;
    margin-top: 0;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }

  .button-modal-no {
    background-color: #cecece;
  }

  .button-modal-yes {
    margin-left: 14px;
    background-color: #ff4791;
  }
`
