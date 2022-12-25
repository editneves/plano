import styled from "styled-components";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useEffect } from "react";
import React, { useContext } from 'react';


export default function Cadastro() {
  // const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  // token.token do objeto que vem da api
  // userToken = token
  // console.log(userToken)

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`,
      {
        headers: { Authorization: "Bearer " + token }
      }
    );
    promise.then((res) => {
      console.log(res.data);
      // setTodayHabits(res.data);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <>
      <Container>
        {token}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  display:flex;

  img {
    width: 140px;
    height: 95px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
`;
