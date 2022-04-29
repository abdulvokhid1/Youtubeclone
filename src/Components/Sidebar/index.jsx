import React from "react";
import { imglist, list } from "../../mock/sidebar";
import {
  Container,
  Logo,
  Menu,
  Wrapper,
  WrapperMock,
  Icons,
  Title,
  Border,
  Word,
  SecondWrapper,
  NextIcons,
  NextTitles,
} from "./style";

export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu />
        <Logo />
      </Wrapper>
      {list.map((value) => {
        return (
          <WrapperMock>
            <Icons src={value.icon} />
            <Title>{value.title}</Title>
          </WrapperMock>
        );
      })}
      <Border />
      <Word>ABONELİKLER</Word>
      {imglist.map((value) => {
        return (
          <SecondWrapper>
            <NextIcons src={value.img} />
            <NextTitles>{value.title}</NextTitles>
          </SecondWrapper>
        );
      })}
    </Container>
  );
};
export default Sidebar;
