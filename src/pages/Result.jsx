import { Container, Form, Input, Button, Logo } from "./ResultStyle";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination"

const Result = () => {
  return (
    <Container>
      <Form>
        <Link to="/">
          <Logo src="https://raw.githubusercontent.com/tesodev/jqueryLite/master/docs/img/tesodevVector.png" />
        </Link>
        <Input type="text" placeholder="Please enter name or surname" />
        <Button>Search</Button>
      </Form>
      <Pagination />
    </Container>
  );
};

export default Result;
