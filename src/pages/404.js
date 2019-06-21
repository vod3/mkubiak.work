import React from 'react';

import PageWrapper from '../container/PageWrapper';

import SEO from '../components/seo';
import FeaturedWorks from '../components/FeaturedWorks';
import Section from '../components/Section';
import { TextGrid, Title, SubTitle } from '../styles';

const NotFoundPage = () => (
  <PageWrapper>
    <SEO title="404: Not found" />
    <Section>
      <TextGrid>
        <Title>404 - NOT FOUND</Title>
        <SubTitle>The page you are looking for does not exist!</SubTitle>
      </TextGrid>
    </Section>
    <Section title="Selected Work">
      <FeaturedWorks />
    </Section>
  </PageWrapper>
);

export default NotFoundPage;
