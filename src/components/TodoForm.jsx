import React, { useContext, useRef } from 'react'
import TodoData from '../store/todo-context'
import classes from './TodoForm.module.css'

const TodoForm = () => {
	const CntxData = useContext(TodoData)
	const Input = useRef('')
	const onSubmit = (e) => {
		console.log(Input.current)
		e.preventDefault()
		CntxData.dispatch({ type: 'ADD-TODO', val: Input.current.value })
	}

	return (
		<fieldset className={classes.fieldset}>
			<legend className={classes.legend}>simple to do list </legend>
			<form onSubmit={onSubmit}>
				<input className={classes.input} type='text' ref={Input} />
				<button className={classes.button} type='submit'>add</button>
			</form>
		</fieldset>
	)
}

export default TodoForm
