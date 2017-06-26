import React from 'react';
import styled from 'styled-components/primitives';

const Hello = (props) => {
  return (
    <StyledLayout>
      <Text>Hello!</Text>
    </StyledLayout>
  )
}

const StyledLayout = styled.View`
  padding: 10px;
  margin-bottom: 30px;
	border-radius: 5px;
	background-color: #d1d1d1;
  shadow-color: rgba(0, 0, 0, 0.7);
  shadow-offset: 2px 2px;
  shadow-opacity: 0.6;
  shadow-radius: 3px;
  elevation: 5;
`;

const Text = styled.Text`
`;

export default Hello;
