import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import { useEffect } from "react";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {

  const { user } = useContext(AuthContext);
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`,
      {
        headers: { Authorization: "Bearer " + user.token },
      }
    );
    promise.then((res) => {
      setPlanos(res.data);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <>
      <Text>Escolha seu Plano</Text>

      {planos.map(function (plano) {
        return (
          <Link style={{ textDecoration: 'none', color: "white" }} to={`/subscriptions/${plano.id}`}>
          <Container>
            <img src={plano.image} />
            <p key={plano.id}>{plano.price}</p>
          </Container>
          </Link>
        );
      })}
    </>
  );
}





const Text = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`;

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
`;
