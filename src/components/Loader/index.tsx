import React from 'react';
import styled from 'styled-components/native';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderItem>Loading...</LoaderItem>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoaderItem = styled.Text``;
