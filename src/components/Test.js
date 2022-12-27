// import { useState } from "react";
// import styled from "styled-components";

// const [showModal, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

// {/* <button type="submit" onClick={handleShow}>
//   <p>ASSINAR</p>
// </button>; */}

// if (showModal) {
//   return (
//     <>
//       <ButtonX onHide={handleClose}>X</ButtonX>
//       <Box>
//         <Modal show={showModal} onHide={handleClose}>
//           <p>Tem certeza que deseja assinar o plano Driven Plus R$ 39,99?</p>
//           <Div>
//             <ButtonNao onClick={handleClose}>Não</ButtonNao>
//             <ButtonSim onClick={handleClose}>Sim</ButtonSim>
//           </Div>
//         </Modal>
//       </Box>
//     </>
//   );
// }



// const Box = styled.div`
//   width: 375px;
//   height: 617px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0,0,0,0.1);
//   z-index:100;
// `;

// const Modal = styled.div`
//   width: 248px;
//   height: 210px;
//   background: #ffffff;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   p {
//     font-family: "Roboto";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 21px;
//     text-align: center;
//     color: #000000;
//   }
// `;

// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 299px;
//   height: 52px;
//   background: #ff4791;
//   border-radius: 8px;
//   p {
//     font-family: "Roboto";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 21px;
//     text-align: center;
//     color: #000000;
//   }
// `;
// const ButtonX = styled.div`
//   position: absolute;
//   margin-left: 327px;
//   margin-top: 26px;
//   margin-bottom: 179px;
//   width: 28px;
//   height: 24px;
//   background-color: #ffffff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   p {
//     font-family: "Roboto";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 21px;
//     text-align: center;
//     color: #000000;
//   }
// `;
// const Div = styled.div`
//   width: 210px;
//   height: 52px;
//   display: flex;
//   justify-content: space-between;
// `;

// const ButtonSim = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 95px;
//   height: 52px;
//   background: #ff4791;
//   border-radius: 8px;
//   p {
//     font-family: "Roboto";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 16px;
//     color: #ffffff;
//   }
// `;
// const ButtonNao = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 95px;
//   height: 52px;
//   background: #cecece;
//   border-radius: 8px;
//   p {
//     font-family: "Roboto";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 16px;
//     color: #ffffff;
//   }
// `;
