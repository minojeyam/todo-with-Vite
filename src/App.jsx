import { useState } from "react"
import "./index.css"

export default function App () {
  const [ newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([])

  function handleSubmit (e) {
    e.preventDefault()

    setToDos( (currentTodos) => {
      return [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed:false},
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className="new-item-form"
      >
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            type="text" 
            id="item" 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            />
          <button className="btn"> Add </button>
        </div>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {todos.map( todo => {
          return (
            <li key={todo.id}>
              <label> 
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title} 
              </label>
              <button className="btn btn-danger"> Delete </button>
            </li>
          )
         }
        )}
      </ul>
    </>
  )
}