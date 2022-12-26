import styled from 'styled-components'
import axios from 'axios'
import { AuthContext } from '../components/AuthContext'
import { useEffect } from 'react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'

export default function Cadastro() {
  const { planos, setPlanos } = useContext(AuthContext)

  useEffect(() => {
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    })

    promise.then((res) => {
      setPlanos(res.data)
    })

    promise.catch((err) => {
      alert(err.response.data.message)
    })
  }, [setPlanos])

  return (
    <>
      <Text>Escolha seu Plano</Text>

      {planos &&
        planos.map((plano) => {
          return (
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={`/subscriptions/${plano.id}`}
              key={plano.id}
            >
              <Container>
                <img src={plano.image} alt="plan" />
                <p key={plano.id}>{plano.price}</p>
              </Container>
            </Link>
          )
        })}
    </>
  )
}

const Text = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`

const Container = styled.div`
  width: 290px;
  height: 180px;
  margin-top:10px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 140px;
    height: 95px;
  }
  p {
    margin-left:10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
`
