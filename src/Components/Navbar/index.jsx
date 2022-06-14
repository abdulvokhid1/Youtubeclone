import React, { useContext } from "react";
import { data } from "../../mock/body";
import { dataBtn } from "../../mock/btn";
import { navpart } from "../../mock/navbar";
import { ChooseCreateContext } from "../Context/Choose";
import { MovieCreateContex } from "../Context/search";
// import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Input,
  InputFlexing,
  NavIcons,
  NavImg,
  Search,
  Wrapper,
} from "./style";

export const Navbar = () => {
  const [lists, setLists] = useContext(MovieCreateContex);
  const [header, setHeader] = useContext(ChooseCreateContext);

  const InputSearch = (e) => {
    const newData = data.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLists(newData);
  };
  // console.log(headerName);
  return (
    <Container>
      <Wrapper>
        <InputFlexing>
          <Input onChange={InputSearch} type="text" placeholder="search" />
          <Search />
        </InputFlexing>
        {navpart.map((value) => {
          return (
            <div key={value.id}>
              <NavIcons src={value.icon} />
              <NavImg src={value.img} />
            </div>
          );
        })}
      </Wrapper>
      <Wrapper btn>
        {dataBtn.map((value) => {
          return (
            <Button
              key={value.id}
              onClick={() => setHeader(value.item)}
              style={{
                background: header == value.item && "white",
                color: header == value.item && "black",
              }}
            >
              {value.item}
            </Button>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Navbar;
