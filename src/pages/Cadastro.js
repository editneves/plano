import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { Base_URL } from "../constants/urls";
//import { Link } from "react-router-dom";

export default function Cadastro() {
  //const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    name: "",
    cpf: "",
    password: ""
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function fazerCadastro(e) {
    e.preventDefault(); // impede o redirecionamento

    const requisicao = axios.post(`${Base_URL}/sign-up`, {
      form,
    });

    // se der tudo certo com a requisição, vai para a página home
    requisicao.then((req) => {
      console.log(req.data);
      //navigate("/subscriptions");
    });

    requisicao.catch((err) => {
      alert(err.response.data.message);
    });
  }

  return (
    <>
      <Container>
        <form onSubmit={fazerCadastro}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleForm}
            value={form.email}
            required
          />
          <input
            type="name"
            name="name"
            placeholder="Nome"
            onChange={handleForm}
            value={form.name}
            required
          />

          <input
            type="cpf"
            name="cpf"
            placeholder="CPF"
            onChange={handleForm}
            value={form.cpf}
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

          <button type="submit">CADASTRAR</button>
        </form>

        {/* <Link to="/cadastro">*/}
        <TextLink>Já possuí uma conta? Entre</TextLink>
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
  button {
    margin-top: 24px;
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #ffffff;
`;
