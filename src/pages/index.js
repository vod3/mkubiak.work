import React from 'react';

import PageWrapper from '../container/PageWrapper';
import FeaturedWorks from '../components/FeaturedWorks';
import BlogPosts from '../components/BlogPosts';
import Section from '../components/Section';
import { TextGrid, Title, SubTitle } from '../styles';

const IndexPage = () => (
  <PageWrapper>
    <Section>
      <TextGrid>
        <Title>Portfolio</Title>
        <SubTitle>Marvin Kubiak</SubTitle>
        <p>
          Hello! My name is Marvin Kubiak, I like the number <span className="highlight">1990</span> and I'm passionate with lots of
          design-related topics such as <span className="highlight">typography</span>, <span className="highlight">3D-rendering</span>,{' '}
          <span className="highlight">color theory</span> and other small things, that make the world a bit easier. I focus on good{' '}
          <span className="highlight">User Experience</span> on web apps, websites and native mobile screens. For that I build{' '}
          <span className="highlight">modular design systems</span> with a{' '}
          <span className="highlight">good branding for your company in mind.</span> Let's talk and see if we can work together, to improve
          your company's <span className="highlight">success by embracing a funtional design.</span> Your users will be thankful.
        </p>
      </TextGrid>
    </Section>
    <Section title="Selected Work">
      <FeaturedWorks />
    </Section>
    <Section title="Recent Blog Entries">
      <BlogPosts />
    </Section>
  </PageWrapper>
);

export default IndexPage;
