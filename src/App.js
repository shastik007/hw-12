import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Container from './components/UI/Container'

function App() {
	return (
		<Container>
			<h1>simple to do list </h1>
			<TodoForm />
			<TodoList />
		</Container>
	)
}

export default App
