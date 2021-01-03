import React, {FunctionComponent, ReactNode, useContext} from 'react';
import styled from '@emotion/styled';

import {AppContext} from '../AppProvider/AppContext';

type Props = {
  children: ReactNode
}

const SectionSubHeading: FunctionComponent<Props> = ({children}) => {
  const {theme} = useContext(AppContext);
  const Heading = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    color: ${theme === 'light' ? "#000000" : "#EC7D8A"};
    @media (max-width: 576px) {
      font-size: 20px;
    }
  `;
  return(
    <Heading>{children}</Heading>
  )
}

export default SectionSubHeading;