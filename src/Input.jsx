import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./redux/actions"
import { todoListSelector } from './redux/selectors'

function Input() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todoList)
  console.log(todoList)

  const handleOnClickSend = () => {
    dispatch(addTodo({ id: 5, name: name, todo: 'no' }))
  }
  return (
    <div>
      <label>Name</label>
      <input type='text' onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => handleOnClickSend()}>Send!</button>
      <div>
        {todoList.map(todo => <div>{todo.name}</div>)}
      </div>
    </div>
  )
}

export default Input