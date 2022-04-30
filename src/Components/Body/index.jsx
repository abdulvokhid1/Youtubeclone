import React, { useContext, useEffect } from "react";
import { data } from "../../mock/body";
import { ChooseCreateContext } from "../Context/Choose";
import { MovieCreateContex } from "../Context/search";
import { Card, Container, Img, Title } from "./style";

export const Body = () => {
  const [lists, setlists] = useContext(MovieCreateContex);
  const [header, setHeader] = useContext(ChooseCreateContext);
  // useEffect(() => {
  //   const newData = data.filter((value) => value.category == header);
  //   setlists(newData);
  // }, []);
  return (
    <Container>
      {lists.map((value) => {
        return (
          <Card key={value.id}>
            <Img src={value.url} />
            <Title>{value.name}</Title>
          </Card>
        );
      })}
    </Container>
  );
};
export default Body;
