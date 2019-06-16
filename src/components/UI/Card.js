import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row-end: span ${props => props.gridSpan};

  & img {
    width: 250px;
    grid-row-end: span 2;
  }
`;

export default Card;