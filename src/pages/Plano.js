import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'
import perks from '../img/perks.png'
import price from '../img/price.png'
import { useNavigate } from 'react-router-dom'

export default function Cadastro() {
  const { plano, setPlano } = useContext(AuthContext)
  const { planoId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planoId}`,
      {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      },
    )

    promise.then((res) => {
      setPlano(res.data)
    })

    promise.catch((err) => {
      navigate('/')
    })
  }, [setPlano, planoId, navigate])

  if (!plano) return <></>

  return (
    <>
      <Container key={plano.id}>
        <img src={plano.image} alt="plan" />
        <Text>{plano.name} </Text>
        <Box>
          <Div>
            <Img src={perks} alt="perks" />
            Benefícios:
          </Div>

          {plano.perks.map((p) => {
            return (
              <Div key={p.id}>
                <Div>
                  {p.id} -{p.title}
                </Div>
              </Div>
            )
          })}

          <Div>
            {' '}
            <Img src={price} alt="price" /> Preço:{' '}
          </Div>
          <Div>R$ {plano.price} cobrados mensalmente</Div>
        </Box>
      </Container>
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

const Img = styled.img`
  width: 12px;
  height: 16px;
`
const Container = styled.div`
  width: 299px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 140px;
    height: 95px;
  }
`
const Box = styled.div`
  margin-top: 10px;
  width: 299px;
  height: 400px;
  display: flex;
  flex-direction: column;
`
const Div = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`
