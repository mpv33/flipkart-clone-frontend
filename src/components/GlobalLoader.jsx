import React from 'react';
import { styled, CircularProgress, Box } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* semi-transparent white background */
  z-index: 9999; /* ensure it's above other elements */
`;

const GlobalLoader = () => {
  return (
    <Container>
      <CircularProgress color="primary" size={50} thickness={3} />
    </Container>
  );
};

export default GlobalLoader;
