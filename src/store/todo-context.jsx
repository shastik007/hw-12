import React, { useEffect, useReducer } from 'react'

const TodoData = React.createContext({
	state: [],
	dispatch: () => {},
})

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD-TODO':
			return [
				...state,
				{
					id: Math.random().toString(),
					title: action.val,
					isValid: false,
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
	}
}

export const TodosProvider = (props) => {
	const init = () => {
		const localData = JSON.parse(localStorage.getItem('data'))
		return localData ? localData : []
	}
	const [state, dispatchFl] = useReducer(reducer, [], init)

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(state))
	}, [state])
	return (
		<TodoData.Provider value={{ state: state, dispatch: dispatchFl }}>
			{props.children}
		</TodoData.Provider>
	)
}

export default TodoData
