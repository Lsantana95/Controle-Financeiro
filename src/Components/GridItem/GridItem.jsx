import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

// Componente funcional GridItem
const GridItem = ({ item, onDelete }) => {
  // Retorna a estrutura JSX do componente GridItem
  return (
    <C.Tr>
      {/* Célula para a descrição do item */}
      <C.Td>{item.desc}</C.Td>
      {/* Célula para o valor do item */}
      <C.Td>{item.amount}</C.Td>
      {/* Célula para o ícone indicando o tipo de despesa ou receita */}
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      {/* Célula para o ícone de exclusão do item */}
      <C.Td alignCenter>
        {/* Chama a função onDelete ao clicar no ícone de exclusão */}
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
