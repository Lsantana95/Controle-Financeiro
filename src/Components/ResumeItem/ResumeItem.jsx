import React from "react";
import * as C from "./styles";

// Componente funcional ResumeItem
const ResumeItem = ({ title, Icon, value }) => {
  // Retorna a estrutura JSX do componente ResumeItem
  return (
    <C.Container>
      {/* Container com o cabeçalho e o ícone */}
      <C.Header>
        {/* Título do cabeçalho */}
        <C.HeaderTitle>{title}</C.HeaderTitle>
        {/* Ícone passado como propriedade */}
        <Icon />
      </C.Header>
      {/* Valor do resumo (entradas, saídas ou total) */}
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
