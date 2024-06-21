import React, { useState } from 'react';

function List() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((a, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>List</h1>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
         
        />
        <button type="submit">Aggiungi</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;