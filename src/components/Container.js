import styled from "styled-components";

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
      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
    }
`;

export default Container;
