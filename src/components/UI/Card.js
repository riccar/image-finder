import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-row-end: span ${props => props.gridSpan};
  position: relative;

  & img {
    width: 250px;
    grid-row-end: span 2;
  }
`;

const Text = styled.div`
  position: absolute;
  width: 250px;
  bottom: 8px;
  background: rgba(0,0,0,0.7);
  color: white;
  font-size: .7em;
  padding: 1em;
`;

Card.Text = Text

export default Card;