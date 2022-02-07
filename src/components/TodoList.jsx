import React, { useContext } from 'react'
import TodoData from '../store/todo-context'
import classes from './TodoList.module.css'

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
				<li className={classes.li} key={el.id}>
					<input
						onChange={onCheckInput}
						id={el.id}
						type='checkbox'
						checked={el.complete}
					/>
					<label>{el.title}</label>
					<button onClick={onDeleteHandler} id={el.id}>
						delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList
