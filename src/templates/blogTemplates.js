import React from 'react';
import { graphql } from 'gatsby';

import BlogWrapper from '../container/BlogWrapper';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return <BlogWrapper {...frontmatter} html={html} />;
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
        subtitle
      }
    }
  }
`;
