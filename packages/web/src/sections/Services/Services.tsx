import React from  'react';
import styled from '@emotion/styled';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SectionSubHeading from '../../components/SectionSubHeading/SectionSubHeading';
import SectionParagraph from '../../components/SectionParagraph/SectionParagraph';

import SoftwareIcon from '../../images/SoftwareIcon';
import DesignIcon from '../../images/DesignIcon';

function Services(): JSX.Element {
  const Container = styled.div`
    display: grid;
    background: #F9F9F7;
    padding: 60px;
    @media (max-width: 576px) {
      padding: 20px;
    }
  `;
  const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    margin-top: 80px;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `;

  
  return(
    <Container>
      <SectionHeading headingTitle="My Services" />
      <ServicesContainer>
        <div>
          <SoftwareIcon />
          <SectionSubHeading>Software Engineering</SectionSubHeading>
          <SectionParagraph>A seasoned software developer, I offer services in full web and mobile application development connected to the cloud. My tools of choice are ReactJS, NodeJS and Firebase paired with services like Mailchimp, Stripe, Algolia, Mapbox etc.</SectionParagraph>
        </div>
        <div>
          <DesignIcon />
          <SectionSubHeading>UI/UX Design & Branding</SectionSubHeading>
          <SectionParagraph>From design systems, web and mobile user interface design to complete branding strategy, I have industry experience in delivering robust UI/UX solutions in a timely manner. Get in touch with your requirements and find out how I can assist you with your business venture?</SectionParagraph>
        </div>
      </ServicesContainer>
    </Container>
  )
}

export default Services;