import React, { memo } from 'react';
import styled from 'styled-components';

const SpinnerBox = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const PulseContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PulseBubble = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;
  animation: pulse .4s ease ${props => props.ease} infinite alternate;
  @keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
}
`;

const Spinner = () => {

  return (
    <SpinnerBox >
      <PulseContainer >  
        <PulseBubble ease="0s" />
        <PulseBubble ease=".2s" />
        <PulseBubble ease=".4s" />
      </PulseContainer>
    </SpinnerBox>
  )
}

export default memo(Spinner);