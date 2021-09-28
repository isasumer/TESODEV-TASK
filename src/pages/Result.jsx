import { connect } from "react-redux";
import {
  Container,
  CardItem,
  Wrapper,
  Top,
  Bottom,
  Line,
} from "./ResultStyle";

const Result = (props) => {
  return (
    <Container>
      {console.log(props.filteredData[0])}
        {props.filteredData[0].map((item, index) => {
          return (
      <CardItem>
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
      </CardItem>
          );
        })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredData: state.filteredData,
  };
};

export default connect(mapStateToProps)(Result);
