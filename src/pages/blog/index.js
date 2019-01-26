import React from 'react';

import PageWrapper from '../../container/PageWrapper';
import BlogPosts from '../../components/BlogPosts';
import Section from '../../components/Section';

const BlogPage = () => (
  <PageWrapper>
    <Section>
      <BlogPosts />
    </Section>
  </PageWrapper>
);

export default BlogPage;
