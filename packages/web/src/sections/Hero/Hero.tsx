import { defaultCipherList } from 'constants';
import React from 'react';
import styled from '@emotion/styled';

function Hero(): JSX.Element {

  const Container = styled.div`
    display: grid;
    height: 80vh;

    padding: 60px;
  `;

  const Heading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 40px;

    border-bottom: 3px solid #000;
  `;
  
  const HeadingName = styled.div`
    font-weight: 700;
    font-size: 120px;
    text-transform: uppercase;
  `
  const HeadingProfession = styled.div`
    font-weight: 500;
    font-size: 80px;
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