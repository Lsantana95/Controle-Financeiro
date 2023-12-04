import React from "react";
import GridItem from "../GridItem/GridItem";
import * as C from "./styles";

// Componente funcional Grid
const Grid = ({ itens, setItens }) => {
  // Função para lidar com a exclusão de um item
  const onDelete = (ID) => {
    // Filtra o array de itens, removendo o item com o ID fornecido
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    // Atualiza o estado de itens com o novo array
    setItens(newArray);
    // Atualiza o armazenamento local com o novo array convertido para JSON
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  // Retorna a estrutura JSX do componente Grid
  return (
    <C.Table>
      {/* Cabeçalho da tabela */}
      <C.Thead>
        <C.Tr>
          {/* Cabeçalhos das colunas */}
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      {/* Corpo da tabela */}
      <C.Tbody>
        {/* Mapeia os itens e renderiza um componente GridItem para cada um */}
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
