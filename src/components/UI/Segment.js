import styled from 'styled-components';

const Segment = styled.div`	
	background: white;
	margin: 1rem 1rem;
	padding: 1rem 1rem;
	border-radius: .3rem;
  border: 1px solid ${props => props.theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;  
`;

export default Segment;