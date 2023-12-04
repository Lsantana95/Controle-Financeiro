import React from "react";
import ResumeItem from "../ResumeItem/ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

// Componente funcional Resume
const Resume = ({ income, expense, total }) => {
  // Retorna a estrutura JSX do componente Resume
  return (
    <C.Container>
      {/* Componente ResumeItem para as entradas */}
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      {/* Componente ResumeItem para as saídas */}
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      {/* Componente ResumeItem para o total */}
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
