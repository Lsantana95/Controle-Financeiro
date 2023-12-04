import React, { useState } from "react";
import Grid from "../Grid/Grid";
import * as C from "./styles";

// Componente funcional Form
const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  // Estados para armazenar a descrição, o valor e o tipo de transação (despesa ou receita)
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  // Função para gerar um ID aleatório para transações
  const generateID = () => Math.round(Math.random() * 1000);

  // Função para lidar com o salvamento de uma nova transação
  const handleSave = () => {
    // Verifica se a descrição e o valor foram informados
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      // Verifica se o valor é positivo
      alert("O valor tem que ser positivo!");
      return;
    }

    // Cria um objeto de transação com os dados informados
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    // Chama a função handleAdd passando a nova transação como argumento
    handleAdd(transaction);

    // Limpa os campos de descrição e valor
    setDesc("");
    setAmount("");
  };

  // Retorna a estrutura JSX do componente Form
  return (
    <>
      {/* Container principal do componente Form */}
      <C.Container>
        {/* Input para a descrição da transação */}
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        {/* Input para o valor da transação */}
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        {/* Grupo de rádio para selecionar o tipo de transação (entrada ou saída) */}
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        {/* Botão para adicionar a transação */}
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      {/* Renderiza o componente Grid, passando a lista de transações e a função para atualizá-la */}
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
