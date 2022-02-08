import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import classes from './TodoList.module.css'

const TodoItem = (props) => {
	return (
		<li className={classes.li} >
			<Checkbox
				checked={props.el.complete}
				id={props.el.id}
				onChange={props.onCheckInput}
				className={classes.checkbox}
			/>
			<label className={classes.taskText}>{props.el.title}</label>

			<Button
				onClick={props.onDeleteHandler}
				className={classes.deleteBtn}
				variant='outlined'
				color='error'
				id={props.el.id}
			>
				delete
			</Button>
		</li>
	)
}

export default TodoItem
