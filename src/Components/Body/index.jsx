import React, { useContext } from "react";
import { data } from "../../mock/body";
import { MovieCreateContex } from "../Context/search";
import { Card, Container, Img, Title } from "./style";

export const Body = () => {
  const [lists, setlists] = useContext(MovieCreateContex);
  return (
    <Container>
      {lists.map((value) => {
        return (
          <Card>
            <Img src={value.url} />
            <Title>{value.title}</Title>
          </Card>
        );
      })}
    </Container>
  );
};
export default Body;
