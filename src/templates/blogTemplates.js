import React from 'react';
import { graphql } from 'gatsby';

import PostWrapper from '../container/PostWrapper';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  console.log(markdownRemark);
  return (
    <PostWrapper {...frontmatter}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </PostWrapper>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
        subtitle
      }
    }
  }
`;
