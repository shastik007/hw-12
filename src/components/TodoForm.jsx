import React, { useRef } from 'react'

const TodoForm = (props) => {
	const Input = useRef('')
	const onSubmit = (e) => {
		e.preventDefault()
		props.dispatchFl({ type: 'ADD-TODO', val: Input.current.value })
	}
	return (
		<form onSubmit={onSubmit}>
			<input ref={Input} type='text' />
			<button type='submit'>add</button>
		</form>
	)
}

export default TodoForm
