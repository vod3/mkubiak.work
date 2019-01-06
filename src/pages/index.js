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
          Hallo! Mein Name ist Marvin Kubiak, <span className="highlight">1990</span> ist meine Lieblingszahl und ich beschäftige mich
          ständig mit Designdisziplinen wie <span className="highlight">Typografie</span>, <span className="highlight">3D Rendering</span>,{' '}
          <span className="highlight">Farblehre</span> und sonstigen <span className="highlight">kleinen Dingen</span>, die die Welt ein
          Stückchen einfacher machen soll. Neuerdings beschäftige ich mit den Prozessen in der{' '}
          <span className="highlight">User Experience</span> und das Aufziehen eines{' '}
          <span className="highlight">Visual Design Guidelines</span> auf Basis der Erkenntnisse der UX. Dabei möchte ich dir gerne helfen,{' '}
          <span className="highlight">schreib mir einfach!</span>
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
