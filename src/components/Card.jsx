import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../actions/action";
import {
  Container,
  CardItem,
  Wrapper,
  Top,
  Bottom,
  Line,
  Form,
  Input,
  Button,
  ShowMore,
} from "./CardStyle";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
    
    props.search(inputRef.current.value);
  };
;    
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Please enter name or surname"
        />
        <Button type="submit">Search</Button>
      </Form>
      {show && (
        <Container>
          <CardItem>
            {props.filteredData?.map((item) => {
              return (
                <Wrapper key={item[2]}>
                  <Top>
                    <span>
                      {item[4]} - {item[5]}
                    </span>
                    <span>{item[2]}</span>
                  </Top>
                  <Bottom>
                    <span>{item[0]}</span>
                    <span> - {item[3]}</span>
                  </Bottom>
                  <Line></Line>
                </Wrapper>
              );
            })}
          </CardItem>
          {props.filteredData?.length > 3 && (
            <Link to="result">
              <ShowMore >Show more...</ShowMore>
            </Link>
          )}
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    filteredData: state.filteredData,
  };
};
export default connect(mapStateToProps, { search })(Card);
