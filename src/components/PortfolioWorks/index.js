import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Grid } from './styles';
import PortfolioLink from '../PortfolioLink';

const FeaturedWorks = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "portfolio" } } }) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  subtitle
                  headerColor
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
          }
        }
      `}
      render={({ allMarkdownRemark: { edges } }) => (
        <Grid>
          {edges.map(({ node: { id, excerpt, frontmatter } }) => (
            <PortfolioLink key={id} {...frontmatter} excerpt={excerpt} />
          ))}
        </Grid>
      )}
    />
  );
};

export default FeaturedWorks;
