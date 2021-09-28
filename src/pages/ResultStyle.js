import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
`;
export const CardItem = styled.div`

`;
export const Wrapper = styled.div`

`;
export const Top = styled.div`
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;
export const Bottom = styled.div`
  align-items: center;
  padding: 0px 30px;
  height: 26px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #686868;
`;
export const Line = styled.div`
  width: 644px;
  height: 0px;
  border: 1px solid #585858;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: auto;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const Input = styled.input`
  height: 46px;
  width: 709px;
  border-radius: 8px;
`;
export const Button = styled.button`
  height: 46px;
  width: 138px;
  border-radius: 8px;
  background: #204080;
  color: white;
  margin-left: 10px;
`;

export const ShowMore = styled.div`
  width: 79px;
  height: 17px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  margin:auto;
  cursor:pointer;
`;
