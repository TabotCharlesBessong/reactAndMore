
import React from 'react'
import { useState } from 'react'
import { todoListState } from '../atom/todoListAtom'
import {useSetRecoilState} from 'recoil'

const TodoItemCreator = () => {
  let id = 0;
	const getId = () => {
		return id++;
	}
  const [inputValue,setInputValue] = useState('')
  // setting the value of the state variable
  const setTodoList = useSetRecoilState(todoListState)

  // this function will update the value of the atom state by pushing the value in the input
  const addItem = () => {
    if (inputValue === "") {
      alert("Please select add value");
      return
    }
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id:getId(),
        text:inputValue,
        isComplete:false
      }
    ])
    console.log({ inputValue }, "creation");
    setInputValue('')
  }

  const handleChange = ({target:{value}}) => {
    setInputValue(value)
  }
  return (
		<div className='todo-creator' >
			<input style={{marginRight:'2rem'}} type="text" value={inputValue} onChange={handleChange} />
			<button onClick={addItem}>Add</button>
		</div>
	);
}

export default TodoItemCreator