import React, { useContext, useState } from 'react'
import TodoData from '../store/todo-context'
import classes from './TodoForm.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const TodoForm = () => {
	const CntxData = useContext(TodoData)
	const [state, Setstate] = useState([])
	const onSubmit = (e) => {
		e.preventDefault()
		CntxData.dispatch({ type: 'ADD-TODO', val: state })
		Setstate('')
	}

	return (
		<form className={classes.form} onSubmit={onSubmit}>
			<TextField
				value={state}
				onChange={(e) => {
					Setstate(e.target.value)
				}}
				id='filled-basic'
				label='Filled'
				variant='filled'
				className={classes.input}
			/>
			<Button
				className={classes.button}
				type='submit'
				variant='contained'
			>
				add
			</Button>
		</form>
	)
}

export default TodoForm
