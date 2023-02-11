import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atom/todoListAtom';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  // based on the value here, the atom state will return a particular state that matches the criteria
	const updateFilter = ({ target: { value } }) => {
		setFilter(value);
	};

	return (
		<>
			Filter:
			<select value={filter} onChange={updateFilter}>
				<option value="Show All">Show All</option>
				<option value="Show Completed">Show Completed</option>
				<option value="Show Uncompleted">Show Uncompleted</option>
			</select>
		</>
	);
}

export default TodoListFilters