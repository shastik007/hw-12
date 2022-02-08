import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import ReactDom from 'react-dom'

const Modal = () => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='error'>
				This is an error alert — check it out!
			</Alert>
		</Stack>
	)
}

export default Modal
