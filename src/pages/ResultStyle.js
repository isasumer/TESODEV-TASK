import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const Input = styled.input`
  border-radius: 8px;
  width: 644px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 30px;
  :hover {
    background: rgba(100, 100, 100, 0.08)};
`;
export const Button = styled.button`
  height: 46px;
  width: 138px;
  border-radius: 8px;
  background: #204080;
  color: white;
  :hover {
    background: #4f75c2;
  }
`;

export const Logo = styled.img`
  margin-bottom: 10px;
  width: 149px;
  height: 63px;
  margin: 0 35px;
`;
