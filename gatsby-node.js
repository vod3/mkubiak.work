/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplates.js`);
  const portfolioPostTemplate = path.resolve(`src/templates/portfolioTemplate.js`);

  const portfolio = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { type: { eq: "portfolio" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const blog = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (portfolio.errors) {
    throw blog.errors;
  } else {
    portfolio.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: portfolioPostTemplate,
      });
    });
  }

  if (blog.errors) {
    throw blog.errors;
  } else {
    blog.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      });
    });
  }
};
