import React, {useContext} from 'react';
import styled from '@emotion/styled';

import {AppContext} from '../../components/AppProvider/AppContext';

function Hero(): JSX.Element {

  const {theme} = useContext(AppContext);

  const Container = styled.div`
    display: grid;
    padding: 60px;
    background: ${theme === 'light' ? "#FFFFFF" : "#122632"};
    @media (max-width: 576px) {
      padding: 20px;
      min-height: 0;
    }
  `;

  const Heading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 40px;
    border-bottom: 3px solid #000;
    @media (max-width: 576px) {
      font-size: 24px;
      text-align: center;
      padding-bottom: 30px;
    }
  `;
  
  const HeadingName = styled.div`
    font-weight: 700;
    font-size: 120px;
    text-transform: uppercase;
    @media (max-width: 576px) {
      font-size: 40px;
    }
  `
  const HeadingProfession = styled.div`
    font-weight: 500;
    font-size: 80px;
    @media (max-width: 576px) {
      font-size: 32px;
    }
  `;
  return(
    <Container>
      <Heading>
        <div>Hi, I'm</div>
        <HeadingName>Fahad Ahmed</HeadingName>
        <HeadingProfession>Software Engineer & UX Designer</HeadingProfession>
        <div>based in Melbourne, Australia.</div>
      </Heading>
      <div>
        <span>Follow my updates on:</span>
      </div>
    </Container>
  )
}

export default Hero;