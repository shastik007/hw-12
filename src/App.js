import React, { useEffect, useReducer } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD-TODO':
			return [
				...state,
				{
					id: Math.random().toString(),
					title: action.val,
					complete: false,
					date: new Date().toLocaleString(),
				},
			]
		case 'DELETE-ITEM':
			return [...state.filter((item) => item.id !== action.id)]
		case 'ITEM-COMPLETE':
			return state.map((item) => {
				if (item.id === action.check_id) {
					return { ...item, complete: !item.complete }
				} else {
					return item
				}
			})

		default: 
		 return []
			break
	}
}

function App() {
	const init = () => {
		const localData = JSON.parse(localStorage.getItem('data'))
		return localData ? localData : []
	}
	const [state, dispatchFl] = useReducer(reducer, [], init)

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(state))
	}, [state])

	return (
		<div className='App'>
			<TodoForm dispatchFl={dispatchFl} state={state} />
			<TodoList dispatchFl={dispatchFl} state={state} />
		</div>
	)
}

export default App
