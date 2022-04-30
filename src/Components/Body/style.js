import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: #000000;
  display: flex;
  margin: auto;
  height: 1510px;
  flex-wrap: wrap;
  margin: auto;
`;
const Card = styled.div`
  width: 300px;
  height: 300px;
  background: #000000;
  margin-left: 10px;
  /* margin: 20px; */
  margin: auto;
`;
const Img = styled.img`
  width: 300px;
  height: 270px;
  /* transition: all 5s; */
  :hover {
    width: 295px;
    height: 265px;
  }
  cursor: pointer;
`;
const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  :hover {
    color: blue;
    font-size: 18px;
    line-height: 25px;
  }
`;

export { Container, Card, Img, Title };
