import React from "react";
import * as C from "./styles";
import { MdArticle } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdArticle />
      <C.Title>Chat App</C.Title>
      <C.Info>
        Chat App desenvolvido com ReactJS e Firebase!
      </C.Info>
    </C.Container>
  );
};

export default Default;