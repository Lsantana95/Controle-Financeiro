import React from "react";
import * as C from "./styles";

const Header = () => {
  return (
    // Container principal do componente
    <C.Container>
      {/* Elemento de cabeçalho */}
      <C.Header>
        {/* Título do cabeçalho */}
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};

export default Header;
