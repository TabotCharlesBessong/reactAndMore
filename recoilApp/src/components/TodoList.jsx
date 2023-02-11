import React from 'react'
import { filteredTodoListState } from '../atom/todoListAtom'
import {useRecoilValue} from 'recoil'
import {TodoItemCreator , TodoItem, TodoListStats, TodoListFilters} from '../components'

const TodoList = () => {
  // reading the value of the state
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <>
      <TodoListStats/>
      <TodoListFilters/>
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