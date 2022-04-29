import React, { useContext } from "react";
import { data } from "../../mock/body";
import { MovieCreateContex } from "../Context/search";
import { Container, Input, InputFlexing, Search, Wrapper } from "./style";

export const Navbar = () => {
  const [lists, setLists] = useContext(MovieCreateContex);

  const InputSearch = (e) => {
    const newData = data.filter((value) =>
      value.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLists(newData);
  };
  return (
    <Container>
      <Wrapper>
        <InputFlexing>
          <Input onChange={InputSearch} type="text" placeholder="search" />
          <Search />
        </InputFlexing>
      </Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};
export default Navbar;
