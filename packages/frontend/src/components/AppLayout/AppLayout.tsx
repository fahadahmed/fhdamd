import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: grid;
  background: #999999;
`;

type Props = {
  children: ReactNode;
};
function AppLayout({ children }: Props) {
  return <AppContainer>{children}</AppContainer>;
}

export default AppLayout;
