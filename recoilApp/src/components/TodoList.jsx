import React from 'react'
import { todoListState } from '../atom/todoListAtom'
import {useRecoilValue} from 'recoil'
import {TodoItemCreator , TodoItem} from '../components'

const TodoList = () => {
  // reading the value of the state
  const todoList = useRecoilValue(todoListState)
  return (
    <>
      <TodoItemCreator/>

      {
        todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))
      }
    </>
  )
}

export default TodoList