export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>Nog geen uitgaven toegevoegd.</p>;
  }

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Omschrijving</th>
          <th>Categorie</th>
          <th>Bedrag (€)</th>
          <th>delete</th>
        </tr>
      </thead>
      
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{new Date(exp.date).toLocaleDateString()}</td>
            <td>{exp.title}</td>
            <td>{exp.category}</td>
            <td>€ {exp.amount.toFixed(2)}</td>
            <td><button onClick={() => onDelete(exp.id)}>delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
