import React, {FunctionComponent, ReactNode} from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode
}

const SectionParagraph: FunctionComponent<Props> = ({children}) => {
  const Para = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 300;
  `;
  return(
    <Para>{children}</Para>
  )
}

export default SectionParagraph;