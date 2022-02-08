import styled from 'styled-components'

const Container = styled.div`
    text-align:center;
	width: 50%;
	margin: 0 auto;
	display:grid;
    grid-template-columns:1fr;
	& h1 {
		color:aqua;
		text-shadow: 0 0 15px white;
	}
`
export default Container
