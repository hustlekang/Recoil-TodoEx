import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from './TodoStore'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import { filteredTodoListState } from './TodoStore'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />

    {todoList.map((todoItem) => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </>
  )
}