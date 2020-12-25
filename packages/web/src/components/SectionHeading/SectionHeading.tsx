import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

type Props = {
  headingTitle: string
}

const SectionHeading: FunctionComponent<Props> = ({headingTitle}) => {
  const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  `;
  return(
    <Title>{headingTitle}</Title>
  )
}

export default SectionHeading;