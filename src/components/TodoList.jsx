import React, { useContext } from 'react'
import TodoData from '../store/todo-context'
import classes from './TodoList.module.css'
import TodoItem from './TodoItem'

const TodoList = () => {
	const CntxData = useContext(TodoData)
	console.log(CntxData)
	const onDeleteHandler = (e) => {
		CntxData.dispatch({ type: 'DELETE-ITEM', id: e.target.id })
	}
	const onCheckInput = (e) => {
		CntxData.dispatch({
			type: 'ITEM-COMPLETE',
			check_id: e.target.id,
		})
	}
	return (
		<ul className={classes.ul}>
			{CntxData.state.map((el) => (
				<TodoItem
				    key={el.id}
					onDeleteHandler={onDeleteHandler}
					onCheckInput={onCheckInput}
					el={el}
				/>
			))}
		</ul>
	)
}

export default TodoList
