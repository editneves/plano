import styled from "styled-components";
import RoutersComponents from "./RoutersComponents"
import { AuthContext } from "../src/components/AuthContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [cadastro, setCadastro] = useState({
    email: "",
    name: "",
    cpf: "",
    password: ""
  });
  
  return (
    <AuthContext.Provider value={{form, setForm, user, setUser,cadastro, setCadastro}}>
      <Container>
        <RoutersComponents/>
      </Container>
    </AuthContext.Provider>
  );
}

const Container = styled.div`
  width: 375px;
  height: 667px;
  background: #0e0e13;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
`;
