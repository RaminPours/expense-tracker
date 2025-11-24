import { useState, useEffect } from "react";
import "./app.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    try {
      const stored = localStorage.getItem("expenses");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // nieuwe uitgave toevoegen
  function handleAddExpense(expense) {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }

// uitgaven in localStorage opslaan
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // uitgave verwijderen
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    return;
  };

  // totaal berekenen
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="app">
      <h1>Uitgaven beheren</h1>

      <section className="card">
        <h2>Nieuwe uitgave</h2>
        <ExpenseForm onAdd={handleAddExpense} />
      </section>

      <section className="card">
        <h2>Overzicht</h2>
        <p><strong>Totaal:</strong> € {total.toFixed(2)}</p>
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </section>
    </div>
  );  
}
