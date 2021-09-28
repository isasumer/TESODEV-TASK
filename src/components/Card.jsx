import { useRef, useState } from "react";
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
  const [data, setFilteredData] = useState(props.data);
  const [show, setShow] = useState(false);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
    const newList = props.data.filter((val) => {
      if (val[0].toLowerCase().includes(inputRef.current.value.toLowerCase())) {
        return val;
      }
    });

    setFilteredData(newList);
    props.search(newList)
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Input type="text" ref={inputRef} />
        <Button type="submit">Search</Button>
      </Form>
      {show && (
        <Container>
          <CardItem>
            {data.map((item, index) => {
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
          
            <Link to="result">
              <ShowMore>Show more...</ShowMore>
            </Link>
        
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps,{search})(Card);
