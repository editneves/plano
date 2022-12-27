import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useParams } from "react-router";
import styled from "styled-components";

export default function PlanSignature() {
  const { planoId } = useParams();
  const { creditCard, setCreditCard } = useContext(AuthContext);

  const handleForm = (e) => {
    setCreditCard({
      ...creditCard,
      [e.target.name]: e.target.value,
      membershipId: planoId,
    });
  };

  const doRequest = async () => {
    try {
      const req = await axios.post(`${BASE_URL}/subscriptions`, creditCard, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      const { status } = req;
      console.log("asdasda " + status);
    } catch (err) {
      console.log(err);
    }
  };

  const assignToPlan = (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <>
      <Container>
        <form onSubmit={assignToPlan}>
          <input
            onChange={handleForm}
            type="text"
            name="cardName"
            placeholder="Nome impresso no cartão"
            required
          />

          <input
            onChange={handleForm}
            type="text"
            name="cardNumber"
            placeholder="Dígitos do cartão"
            required
          />

          <div className="custom-row">
            <input
              onChange={handleForm}
              className="custom-input"
              type="text"
              name="securityNumber"
              placeholder="Código de segurança"
              required
            />

            <input
              onChange={handleForm}
              className="custom-input"
              type="text"
              name="expirationDate"
              placeholder="Validade"
              required
            />
          </div>

          <button type="submit">
            <p>ASSINAR</p>
          </button>
        </form>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 299px;
  height: auto;
  margin-bottom:34px;
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

  .custom-row {
    display: flex;
    flex-direction: row;
    width: 307px;
    justify-content: space-between;
  }

  .custom-input {
    width: 140px;
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
    p{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #000000;
    }
`;
