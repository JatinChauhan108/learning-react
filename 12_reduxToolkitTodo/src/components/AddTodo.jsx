import React, {useState} from 'react'
import { addTodo, toggleUpdateMode, updateTodo } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'


function AddTodo() {

    const [input, setInput] = useState("")

    const updateMode = useSelector(state => state.updateMode)
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        updateMode ? dispatch(updateTodo(input)) : dispatch(addTodo(input))
        setInput('')
        if(updateMode) dispatch(toggleUpdateMode())
    }

  return (
    <form onSubmit = {onSubmitHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder= {updateMode ? "Enter updated value" : "Enter a Todo..."}
        value = {input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updateMode ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo