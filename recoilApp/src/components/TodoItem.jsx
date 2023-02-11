import React,{useState} from "react";
import {useRecoilState} from 'recoil'
import { todoListState } from "../atom/todoListAtom";

const TodoItem = ({ item }) => {
  // read the value from the state
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({ target: { value } }) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});

		setTodoList(newList);
    console.log({todoList},'editing')
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
    console.log({todoList},'completed')
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
    console.log({todoList},'deleted')
	};

	return (
		<div>
			<input type="text" value={item.text} onChange={editItemText} />
			<input
				type="checkbox"
				checked={item.isComplete}
				onChange={toggleItemCompletion}
			/>
			<button onClick={deleteItem}>X</button>
		</div>
	);
}

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem