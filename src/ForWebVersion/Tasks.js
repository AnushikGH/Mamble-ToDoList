import { useState, useRef } from 'react'
import Modal from './Modal'
import "./App.scss"

function Task({ toDo, setToDo, onChange }) {
    const [isOpen, setIsOpen] = useState({
        isLoading: false
    })


    const handleModal = (isLoading) => {
        setIsOpen({ isLoading })
    }

    const handleDel = (id) => {
        handleModal(true)
        idTask.current = id
    }

    const idTask = useRef()

    const areUSureDelete = (type) => {
        if (type) {
            setToDo(toDo.filter(p => p.id !== idTask.current))
            handleModal(false)
        } else {
            handleModal(false)
        }

    }

    return (
        <div>
            {toDo.map((todo) => {
                return (
                    <div key={todo.id} id="tasklist">
                        <input type="checkbox" checked={todo.IsCompleted} onChange={(e) => {
                            onChange({
                                ...todo,
                                IsCompleted: e.target.checked
                            })
                        }}
                        />
                        <p>{todo.text}</p>
                        {isOpen.isLoading && <Modal onModal={areUSureDelete} isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} />}
                        <button onClick={() => handleDel(todo.id)}>X</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Task;