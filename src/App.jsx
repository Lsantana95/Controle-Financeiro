import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Resume from "./Components/Resume/Resume";
import GlobalStyle from "./styles/global";

// Componente funcional App
function App() {
  // Obtém os dados do armazenamento local
  const data = localStorage.getItem("transactions");
  // Estado para armazenar a lista de transações
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  // Estados para armazenar o total de entradas, saídas e o total geral
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  // Efeito para calcular o total de entradas, saídas e o total geral ao montar o componente
  useEffect(() => {
    // Filtra as transações para obter as despesas e receitas, e converte os valores para números
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    // Calcula o total de despesas e receitas
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    // Calcula o total geral
    const total = Math.abs(income - expense).toFixed(2);

    // Atualiza os estados com os valores calculados
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  // Função para adicionar uma nova transação à lista
  const handleAdd = (transaction) => {
    // Cria um novo array de transações com a transação adicionada
    const newArrayTransactions = [...transactionsList, transaction];

    // Atualiza o estado com o novo array de transações
    setTransactionsList(newArrayTransactions);

    // Atualiza o armazenamento local com o novo array de transações convertido para JSON
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  // Retorna a estrutura JSX do componente App
  return (
    <>
      {/* Renderiza o componente Header */}
      <Header />
      {/* Renderiza o componente Resume, passando os valores de entradas, saídas e total */}
      <Resume income={income} expense={expense} total={total} />

      {/* Renderiza o componente Form, passando a função handleAdd e os estados relacionados às transações */}
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      {/* Aplica o estilo global */}
      <GlobalStyle />
    </>
  );
}

export default App;
