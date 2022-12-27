import { AuthContext } from "../components/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import styled from "styled-components";
import Usuario from "../img/Usuario.png";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const changePlan = () => {
    navigate("/subscriptions");
  };

  const cancelPlan = async () => {
    try {
      const resp = await axios.delete(`${BASE_URL}/subscriptions`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });

      if (resp.status === 204) {
        navigate("/subscriptions");
      } else {
        // Nothing todo
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (user === null || user?.membership === undefined) {
      navigate("/");
    }
  }, [navigate, user]);

  if (user === null || user?.membership === undefined) return <></>;
  console.log("essee", user);
  return (
    <>
      <Container>
        <Topo>
          <ImgPlano src={user.membership.image} alt="plan" />
          <ImgUsuario src={Usuario} alt="user" />
        </Topo>
        <Texto> Olá, {user.name}</Texto>
        <Div>
          {user.membership.perks.map((perk) => {
            return (
              <ButtonBeneficios key={perk.id}>{perk.title}</ButtonBeneficios>
            );
          })}
        </Div>

        <DivButton>
          <ButtonMudar onClick={changePlan}>Mudar plano</ButtonMudar>
          <ButtonCancelar onClick={cancelPlan}>Cancelar plano</ButtonCancelar>
        </DivButton>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 299px;
  height: 667px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;
const ImgPlano = styled.img`
  width: 75px;
  height: 50px;
`;
const ImgUsuario = styled.img`
  width: 34px;
  height: 32px;
`;
const Topo = styled.div`
  margin-top:22px;
  width: 299px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Texto = styled.label`
  margin-top: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;
const Div = styled.div`
  margin-top:53px;
  width: 299px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;
const ButtonBeneficios = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  width: 299px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;

const DivButton = styled.div`
  margin-bottom:12px;
  width: 299px;
  height: 112px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;
const ButtonMudar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  width: 299px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;
const ButtonCancelar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  width: 299px;
  height: 52px;
  background: #ff4747;
  border-radius: 8px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;
