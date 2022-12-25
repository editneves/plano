import styled from "styled-components";
import axios from "axios";
import Logo from "../img/logo.png";
import { Base_URL } from "../constants/urls";
//import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "../components/AuthContext";

export default function Login() {
  //const navigate = useNavigate();

  const { form, setForm } = useContext(AuthContext);
  const {  setToken } = useContext(AuthContext);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function fazerLogin(e) {
    e.preventDefault(); // impede o redirecionamento

    const requisicao = axios.post(`${Base_URL}/login`, {
      form,
    });

    // se der tudo certo com a requisição, vai para a página home
    requisicao.then((req) => {
      setToken(req.data);
      //navigate("/subscriptions");
    });

    requisicao.catch((err) => {
      alert(err.response.data.message);
    });
  }

  return (
    <>
      <Container>
        <img src={Logo} alt="Logo" />

        <form onSubmit={fazerLogin}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleForm}
            value={form.email}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="senha"
            onChange={handleForm}
            value={form.password}
            required
          />

          <button type="submit">ENTRAR</button>
        </form>

        {/* <Link to="/cadastro">*/}
          <TextLink >
           Não possuí uma conta? Cadastre-se
          </TextLink>
       {/* </Link> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 299px;
  height: 420px;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom:100px;
    width: 299px;
    height: 49px;
    left: 38px;
    top: 134px;
  }
  input {
    margin-top:16px;
    width: 299px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
  }
  button {
    margin-top:24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
  }
`;

const TextLink = styled.label`
  margin-top: 20px;
  text-align: center;
  text-decoration-line: underline;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #FFFFFF;
`;
