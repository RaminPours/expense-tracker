import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // formulier verzenden
  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) { 
      return;
    }

    const expense = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category: category || "Onbekend",
      date: new Date().toISOString(),
    };

    onAdd(expense);

    // velden leegmaken
    setTitle("");
    setAmount("");
    setCategory("");
  }

  

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-row">
        <label>Omschrijving</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="boodschappen bijv..."
        />
      </div>

      <div className="form-row">
        <label>Bedrag (€)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
        />
      </div>

      <div className="form-row">
        <label>Categorie</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Wonen bijv..."
        />
      </div>

      <button type="submit">Toevoegen</button>
    </form>
  );
}
