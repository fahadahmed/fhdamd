import React from  'react';
import styled from '@emotion/styled';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SectionSubHeading from '../../components/SectionSubHeading/SectionSubHeading';
import SectionParagraph from '../../components/SectionParagraph/SectionParagraph';

function Blog(): JSX.Element {
  const Container = styled.div`
    display: grid;
    padding: 60px;
    @media (max-width: 576px) {
      padding: 20px;
    }
  `;

  const Article = styled.div`
    border-bottom: 3px solid #000;

    &:last-child {
      border: none;
    }
  `; 

  const Button = styled.button`
    background: none;
    border: none;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 30px;
    padding: 10px 10px 10px 0px;  

    &:hover {
      background: #000;
      padding: 10px;
      padding-right: 20px;
      color: #fff;
    }

    @media (max-width: 576px) {
      background: #000;
      color: #fff;
      padding: 12px;
    }
  `;

  const data = [
    {
      title: "Theming with React Context API, TypeScript and Emotion",
      extract: "Create a toggle to allow to switch between a light and dark theme using React Context API, TypeScript and Emotion."
    },
    {
      title: "Working with Firebase",
      extract: "Firebase is a great backend as a service (BaaS) cloud technology that allows startups and corporations to build web and mobile apps quickly. This is a quick beginner level tutorial how to get started with Firebase."
    },
    {
      title: "CSS Grids and Flexbox Layouts",
      extract: "Custom layout explorations using the advanced techniques in CSS Grids and Flexbox and how to create beautiful layouts that are responsive and functional."
    }
  ]
  return(
    <Container>
      <SectionHeading headingTitle="The Nerdy Bits" />
      {data.map((article, i) => (
        <Article key={i}>
          <SectionSubHeading>{article.title}</SectionSubHeading>
          <SectionParagraph>{article.extract}</SectionParagraph>
          <Button>Read more</Button>
        </Article>
      ))}
    </Container>
  )
}

export default Blog;