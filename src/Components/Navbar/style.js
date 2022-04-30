import styled from "styled-components";
import { ReactComponent as search } from "../../Assets/icons/search.svg";
const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: ${({ btn }) => btn && "center"};
  /* padding: ${({ btn }) => btn && "0 15px"}; */
  align-items: center;
  background: #212121;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); ;
`;
const InputFlexing = styled.div`
  margin: auto;
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
`;
const Input = styled.input`
  width: 90%;
  height: 40px;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.2);
`;
const Search = styled(search)`
  margin-left: 18px;
`;

const Button = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 30px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 12px;
  /* width: 90px; */
  /* height: 40px; */
  /* align-items: center;
  text-align: center; */
  margin: auto;
  transition: all 0.5s;
  cursor: pointer;
`;
export { Button, Container, Wrapper, InputFlexing, Input, Search };
