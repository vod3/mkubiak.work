import React from 'react';

import PageWrapper from '../../container/PageWrapper';
import PortfolioWorks from '../../components/PortfolioWorks';
import Section from '../../components/Section';
import { Title } from '../../styles';

const PortfolioPage = () => (
  <PageWrapper>
    <Section>
      <Title single>My works</Title>
      <PortfolioWorks />
    </Section>
  </PageWrapper>
);

export default PortfolioPage;
