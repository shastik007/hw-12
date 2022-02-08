import React, { useContext } from 'react'
import TodoData from '../store/todo-context'
import classes from './TodoList.module.css'
import TodoItem from './TodoItem'

const TodoList = () => {
	let  text = <h1>you have no tasks for the near future</h1>
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
	if (CntxData.state.length > 0) {
		text = CntxData.state.map((el) => (
			<TodoItem
				key={el.id}
				onDeleteHandler={onDeleteHandler}
				onCheckInput={onCheckInput}
				el={el}
			/>
		))
	}

	return <ul className={classes.ul}>
		{text}
	</ul>
}

export default TodoList
