import  { useState } from 'react'
import './App.scss'
import Task from './Tasks'
import NoTaskDiv from './NoTaskDiv'
import { v4 as uuidv4 } from 'uuid'

export default function ToDoList() {
  const [toDo, setToDo] = useState([{
    id: 1,
    text: "Researching,designing,implementing software programs.",
    IsCompleted: false
  },
  {
    id: 2,
    text: " Testing and evaluating new programss.",
    IsCompleted: false
  },
  {
    id: 3,
    text: "Identifying areas for modification in existing programs.",
    IsCompleted: false
  },
  {
    id: 4,
    text: "Writing an d implementing efficient code.",
    IsCompleted: false
  },
  {
    id: 5,
    text: "Identifying areas for modification in existing programs.",
    IsCompleted: false
  }
  ])


  const [text, setText] = useState("")
  const [boolean, setboolean] = useState(true)
  const [hideCheckbox, setHideCheckbox] = useState(true)
  



  const handleChange = (e) => {
    if (e.target.value.length >= 54 || e.target.value.length == 0) {
      setboolean(false)
    }
    else {
      setText(e.target.value)
      setboolean(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length == 0) {
      setboolean(false)
    }
    else {
      setToDo([
        {
          id: uuidv4(),
          text: text,
          isCompleted: false
        },
        ...toDo
      ])
      setText("")
    }

  }

  const hideCompleted = (e) => {
    
    if(hideCheckbox){
    setToDo(toDo.filter((toDo) => !toDo.IsCompleted))
    setHideCheckbox(false)
  }
  
    else{
      setToDo(toDo)
      setHideCheckbox(true)
    }
  }

  



  return (
    <div>
      <div id="HideCheckbox">
        <input type="checkbox" id="checkBox"  onChange={hideCompleted}></input>
        <h2>Hide completed</h2>
      </div>

      <div id="TaskInput">
        <label>Task</label>
        <form onSubmit={handleSubmit}>
          <input type="text" id="inputForTask" value={text} onChange={handleChange} placeholder="Write here" />
          <input type="submit" id="inputForAdd" value="Add" />
          <p className={boolean ? "hiddenP" : "visableP"}>Task content must contain at least 5 and maximum  54 characters!</p>
        </form>
      </div>

      {toDo.length ? <Task toDo={toDo}
        setToDo={setToDo}
        onChange={(newTodo) => {
          setToDo(toDo.map((todo) => {
            if (todo.id == newTodo.id) {
              return newTodo
            }
            return todo
          }))
        }} />
        : <NoTaskDiv />}

    </div>
  )
}


