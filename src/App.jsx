import { useState } from "react"
import "./index.css"

export default function App () {
  const [ newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([])

  function handleSubmit (e) {
    e.preventDefault()

    setToDos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed:false},
    ])
  }
  console.log(todos);

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
        <li>
          <label> 
            <input type="checkbox"/>
            Item 1 
          </label>
          <button className="btn btn-danger"> Delete </button>
        </li>
        <li>
          <label> 
            <input type="checkbox"/>
            Item 2 
          </label>
          <button className="btn btn-danger"> Delete </button>
        </li>
      </ul>
    </>
  )
}