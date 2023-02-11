
import { useRecoilValue } from 'recoil';
import {atom,selector} from 'recoil'

// declaring a state
export const todoListState = atom({
  key:'TodoList',
  default:[]
})

export const todoListFilterState = atom({
	key: "TodoListFilter",
	default: "Show All",
});

export const filteredTodoListState = selector({
	key: "FilteredTodoList",
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case "Show Completed":
				return list.filter((item) => item.isComplete);
			case "Show Uncompleted":
				return list.filter((item) => !item.isComplete);
			default:
				return list;
		}
	},
});

export const todoListStatsState = selector({
	key: "TodoListStats",
	get: ({ get }) => {
		const todoList = get(todoListState);
		const totalNum = todoList.length;
		const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
		const totalUncompletedNum = totalNum - totalCompletedNum;
		const percentCompleted =
			totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

		return {
			totalNum,
			totalCompletedNum,
			totalUncompletedNum,
			percentCompleted,
		};
	},
});

const currentUserIDState = atom({
	key: "CurrentUserID",
	default: 1,
});

export const currentUserNameState = selector({
	key: "CurrentUserName",
	get: ({ get }) => {
		return tableOfUsers[get(currentUserIDState)].name;
	},
});
