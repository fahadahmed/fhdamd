import React, {FunctionComponent, ReactNode, useContext} from 'react';
import styled from '@emotion/styled';

import {AppContext} from '../AppProvider/AppContext';

type Props = {
  children: ReactNode
}

const SectionParagraph: FunctionComponent<Props> = ({children}) => {
  const {theme} = useContext(AppContext);

  const Para = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: ${theme === 'light' ? "#000000" : "#FFFFFF"};
  @media (max-width: 576px) {
    font-size: 18px;
  }
  `;
  return(
    <Para>{children}</Para>
  )
}

export default SectionParagraph;