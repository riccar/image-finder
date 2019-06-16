import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  /*minmax column width min 250px and max 1fr = for every column make it of equal size*/
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  /*grid-gap: 0px 0px;*/
  /*Every grid element is set to 10px height*/
  grid-auto-rows: 10px;
`;

export default Grid;