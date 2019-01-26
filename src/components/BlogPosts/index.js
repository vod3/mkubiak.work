import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Grid } from './styles';
import Post from './Post';

const BlogPosts = ({ limit }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "blog" } } }) {
            edges {
              node {
                id
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
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges } }) => (
        <Grid>
          {edges.map(({ node: { id, excerpt, frontmatter } }, index) =>
            !limit || index < limit ? <Post key={id} {...frontmatter} excerpt={excerpt} /> : null
          )}
        </Grid>
      )}
    />
  );
};

export default BlogPosts;
