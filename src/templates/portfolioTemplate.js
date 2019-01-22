import React from 'react';
import { graphql } from 'gatsby';

import PortfolioWrapper from '../container/PortfolioWrapper';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return <PortfolioWrapper {...frontmatter} html={html} />;
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
        headerColor
        headerMaxWidth
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;
