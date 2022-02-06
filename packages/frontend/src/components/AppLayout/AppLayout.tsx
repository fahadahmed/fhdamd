import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  font-family: 'Fira Code', monospace;
`;

type Props = {
  children: ReactNode;
};
function AppLayout({ children }: Props) {
  return <AppContainer>{children}</AppContainer>;
}

export default AppLayout;
