import React, { useContext, useState } from 'react'
import TodoData from '../store/todo-context'
import classes from './TodoForm.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Modal from './UI/Modal'


const TodoForm = () => {
	const CntxData = useContext(TodoData)
	const [state, Setstate] = useState('')
	const [modal, setModal] = useState(false)
	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (state.trim().length > 1) {
			CntxData.dispatch({ type: 'ADD-TODO', val: state })
			setModal(false)
		} else {
			setModal(true)
		}
		Setstate('')
	}
	const onConfirmHandler = () => {
		setModal(false)
	}

	return (
		<form className={classes.form} onSubmit={onSubmitHandler}>
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
          {modal ? <Modal onConfirmHandler={onConfirmHandler} /> : ''}
		</form>
	)
}

export default TodoForm
