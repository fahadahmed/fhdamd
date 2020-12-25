import React from  'react';
import styled from '@emotion/styled';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SectionParagraph from '../../components/SectionParagraph/SectionParagraph';

function Contact(): JSX.Element {
  const Container = styled.div`
    display: grid;
    background: #F9F9F7;
    padding: 60px;
  `;
  const ContactSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
  `;
  const Hyperlink = styled.a`
    color: #000;
    
    &:hover {
      text-decoration: none;
    }
  `;
  return(
    <Container>
      <SectionHeading headingTitle="Get in touch" />
      <ContactSection>
        <div>
          <SectionParagraph>If you have a web or mobile project that you would like to discuss and would like to work with me, then email me and I will get in touch with you to discuss it further. Let’s make your dream a reality.</SectionParagraph>
        </div>
        <div>
          <SectionParagraph><strong>Email: <Hyperlink href="mailto:contact@fhdamd.dev">contact@fhdamd.dev</Hyperlink></strong></SectionParagraph>
          <SectionParagraph><strong>Address</strong><br/>Collinson Way, Officer, Victoria, 3809</SectionParagraph>
        </div>
      </ContactSection>
    </Container>
  )
}

export default Contact;