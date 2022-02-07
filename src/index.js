import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TodosProvider } from './store/todo-context'

ReactDOM.render(
	<TodosProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</TodosProvider>,
	document.getElementById('root'),
)
