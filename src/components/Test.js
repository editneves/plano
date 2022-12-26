import React, { useState } from "react";
import styled from "styled-components";

export default function Test() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Box>
      <ButtonX onHide={handleClose}>X</ButtonX>
        <div>
          <Button onClick={handleShow}>ASSINAR</Button>
        </div>

        <Modal show={showModal} onHide={handleClose}>
          

          <p>Tem certeza que deseja assinar o plano Driven Plus R$ 39,99?</p>

          <div>
            <ButtonNao onClick={handleClose}>Não</ButtonNao>
            <ButtonSim onClick={handleClose}>Sim</ButtonSim>
          </div>
        </Modal>
      </Box>
    </>
  );
}
const Box = styled.div`
  width: 299px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: green;
`;

const Modal = styled.div`
  position: absolute;
  width: 248px;
  height: 210px;
  left: 64px;
  top: 229px;
  background: #ffffff;
  border-radius: 12px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;
const ButtonX = styled.div`
  margin-top:26px;
  margin-left:327px;
  width: 28px;
  height: 24px;
  background-color: #FFFFFF;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;

const ButtonSim = styled.div`
margin-left:131px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 95px;
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
const ButtonNao = styled.div`
margin-left:22px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: absolute;
width: 95px;
height: 52px;
background: #CECECE;
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
