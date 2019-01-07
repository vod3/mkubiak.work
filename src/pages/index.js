import React from 'react';

import PageWrapper from '../container/PageWrapper';
import PortfolioGrid from '../components/PortfolioGrid';
import { Row, TextGrid } from '../styles';

const IndexPage = () => (
  <PageWrapper>
    <Row style={{ marginBottom: 200 }}>
      <TextGrid>
        <h1>Portfolio</h1>
        <h2 style={{ marginBottom: 72 }}>Marvin Kubiak</h2>
        <p>
          Hallo! My name is Marvin Kubiak, I like the number <span className="highlight">1990</span> and I'm passionate with lots of design-related topics such as <span className="highlight">typography,</span> <span className="highlight">3D-rendering,</span>  <span className="highlight">Color therory</span> and other small things, that make the world a bit easier. I focus on good <span className="highlight">User Experience</span> on Webapps, Websites and native mobile screens. For that I build <span className="highlight">modular design systems</span> with a <span className="highlight">good branding for your Company in mind.</span>  Let's talk and see if we can work together to improve your companys <span className="highlight">success by embracing a funtional design.</span> Your users will be thankful.
        </p>
      </TextGrid>
    </Row>
    <Row>
      <TextGrid>
        <h2 style={{ marginBottom: 72 }}>My Works</h2>
      </TextGrid>
    </Row>
    <PortfolioGrid />
  </PageWrapper>
);

export default IndexPage;
