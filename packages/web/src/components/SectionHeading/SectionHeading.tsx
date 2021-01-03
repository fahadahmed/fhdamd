import React, {FunctionComponent, useContext} from 'react';
import styled from '@emotion/styled';

import {AppContext} from '../AppProvider/AppContext';

type Props = {
  headingTitle: string
}

const SectionHeading: FunctionComponent<Props> = ({headingTitle}) => {
  const {theme} = useContext(AppContext);

  const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    color: ${theme === 'light' ? "#000000" : "#EC7D8A"};
    @media (max-width: 576px) {
      font-size: 32px;
      text-align: center;
      margin-top: 30px;
    }
  `;
  return(
    <Title>{headingTitle}</Title>
  )
}

export default SectionHeading;