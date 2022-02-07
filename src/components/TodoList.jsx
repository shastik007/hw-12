import React from 'react'

const TodoList = (props) => {
	const onDeleteHandler = (e) => {
		props.dispatchFl({ type: 'DELETE-ITEM', id: e.target.id })
	}
	const onCheckInput = (e) => {
		props.dispatchFl({
			type: 'ITEM-COMPLETE',
			check_id: e.target.id,
		})
	}
	return (
		<ul>
			{props.state.map((el) => (
				<li key={el.id}>
					<input
						onChange={onCheckInput}
						id={el.id}
						type='checkbox'
						checked={el.complete}
					/>
					{el.title}
					<button onClick={onDeleteHandler} id={el.id}>
						delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList
