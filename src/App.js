import styled from "styled-components";
import RoutersComponents from "./RoutersComponents"
import { AuthContext } from "../src/components/AuthContext";
import { useState } from "react";
import Home from "./pages/Home";
//import Cadastro from "./pages/Cadastro";
//import Planos from "./pages/Planos";

export default function App() {
  const [token, setToken] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  
  
  return (
    <AuthContext.Provider value={{form, setForm, token, setToken}}>
      <Container>
        {/* <Planos /> */}
        {/* <Home />  */}
        {/*  <Cadastro />*/}
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
