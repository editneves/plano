import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import perks from "../img/perks.png";
import price from "../img/price.png";
import { useNavigate } from "react-router-dom";
import PlanSignature from "../components/PlanSignature";
import { BASE_URL } from "../constants/urls";
import Seta from "../img/Seta.png";
import { Link } from 'react-router-dom'

export default function Cadastro() {
  const { plano, setPlano } = useContext(AuthContext)
  const { planoId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `${BASE_URL}/subscriptions/memberships/${planoId}`,
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
      <Link style={{ textDecoration: 'none', color: 'white' }}
              to={`/subscriptions`}>
      <ImgSeta src={Seta} alt="seta-voltar" />
      </Link>


        <PlanoDiv>
          <ImgPlano src={plano.image} alt="plan" />
          <Text>{plano.name} </Text>
        </PlanoDiv>

        <DadosPlano>
          <SubTitle>
            <ImgFig src={perks} alt="perks" /> Benefícios:
          </SubTitle>

          {plano.perks.map((p) => {
            return (
              <Div key={p.id}>
                <Div>
                  {p.id} -{p.title}
                </Div>
              </Div>
            )
          })}

          <SubTitle>
            {' '}
            <ImgFig src={price} alt="price" /> Preço:
          </SubTitle>

          <Div>R$ {plano.price} cobrados mensalmente</Div>
        </DadosPlano>

        <PlanSignature />
      </Container>
    </>
  )
}

const ImgSeta = styled.img`
  margin-top: 24px;
  margin-right:320px;
  width: 28px;
  height: 28px;
`;

const Text = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`

const ImgPlano = styled.img`
  width: 140px;
  height: 95px;
`
const ImgFig = styled.img`
  width: auto;
  height: auto;
`
const Container = styled.div`
  width: 299px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const PlanoDiv = styled.div`
  width: 299px;
  height: 133px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const DadosPlano = styled.div`
  margin-top: 10px;
  width: 299px;
  height: 184px;
  display: flex;
  flex-direction: column;
`
const SubTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 299px;
  height: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`
const Div = styled.div`
  width: 299px;
  height: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`
