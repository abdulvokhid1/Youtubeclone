import styled from "styled-components";
import { ReactComponent as menu } from "../../Assets/icons/menu.svg";
import { ReactComponent as logo } from "../../Assets/imgs/logo.svg";

const Container = styled.div`
  height: 100vh;
  background: #212121;
  flex: 2;
  height: 1650px;
  position: sticky;
  left: 0;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 30px;
  align-items: center;
`;
const Menu = styled(menu)`
  width: 30px;
  height: 30px;
`;
const Logo = styled(logo)`
  margin-left: 25px;
  width: 140px;
  height: 70px;
`;
const WrapperMock = styled.div`
  display: flex;
  margin-left: 27px;
  align-items: center;
  padding: 15px 0;
`;
const Icons = styled.img`
  width: 35x;
  height: 30px;
`;
const Title = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-left: 40px;
  color: #ffffff;
`;
const Border = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
const Word = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  margin-top: 10px;
`;
const SecondWrapper = styled.div`
  display: flex;
  margin-left: 27px;
  align-items: center;
  padding: 15px 0;
`;
const NextIcons = styled.img`
  width: 35x;
  height: 30px;
`;
const NextTitles = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-left: 40px;
  color: #ffffff;
`;
export {
  NextIcons,
  NextTitles,
  SecondWrapper,
  Word,
  Border,
  Container,
  Wrapper,
  Menu,
  Logo,
  WrapperMock,
  Icons,
  Title,
};
