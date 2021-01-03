import React, {FunctionComponent, ReactNode} from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode
}

const SectionSubHeading: FunctionComponent<Props> = ({children}) => {
  const Heading = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    @media (max-width: 576px) {
      font-size: 20px;
    }
  `;
  return(
    <Heading>{children}</Heading>
  )
}

export default SectionSubHeading;