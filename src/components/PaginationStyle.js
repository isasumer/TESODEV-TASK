import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Wrapper = styled.div``;
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
  border-radius: 8px;
  width: 644px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 30px;
`;
export const Button = styled.button`
  height: 46px;
  width: 138px;
  border-radius: 8px;
  background: #204080;
  color: white;
`;

export const Logo = styled.img`
  margin-bottom: 10px;
  width: 149px;
  height: 63px;
  margin: 0 35px;
`;
