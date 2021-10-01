import { useRef } from "react";
import { Container, Form, Input, Button, Logo } from "./ResultStyle";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { search } from "../actions/action";
import { connect } from "react-redux";

const Result = (props) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    props.search(inputRef.current.value);
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Link to="/">
          <Logo src="https://raw.githubusercontent.com/tesodev/jqueryLite/master/docs/img/tesodevVector.png" />
        </Link>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Please enter name or surname"
        />
        <Button type="submit">Search</Button>
      </Form>
      <Pagination />
    </Container>
  );
};
const mapStateToProps = (props) => {
  return {};
};
export default connect(mapStateToProps, { search })(Result);
