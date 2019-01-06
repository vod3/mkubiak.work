import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from '../components/Navigation';
import MyGlobalStyles from '../Globals';
import { Page, Main } from './styles';

const PageWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HelmetQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <MyGlobalStyles>
          <Page>
            <Helmet title={data.site.siteMetadata.title}>
              <html lang="en" />
            </Helmet>
            <Navigation />
            <Main>{children}</Main>
          </Page>
        </MyGlobalStyles>
      )}
    />
  );
};

export default PageWrapper;
