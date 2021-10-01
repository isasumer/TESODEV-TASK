import Card from "../components/Card";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  height: 89vh;
  align-items: center;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 278px;
  height: 115px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  height: 20px;
  padding-left: 250px;
`;

const Home = () => {
  return (
    <Container>
      <Logo src="https://raw.githubusercontent.com/tesodev/jqueryLite/master/docs/img/tesodevVector.png" />
      <Title>Search Web App</Title>
      <Card/>  {/*verileri burada map ledikten sonra dağıtıyoruz*/}
    </Container>
  );
};
export default Home;
