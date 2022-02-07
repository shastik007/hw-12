import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Container from './components/UI/Container'

function App() {
	return (
		<Container>
			<TodoForm />
			<TodoList />
		</Container>
	)
}

export default App
