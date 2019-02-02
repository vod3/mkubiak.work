import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Navigation from '../components/Navigation';
import Globals from '../Globals';
import { PortfolioPage, Post, BlogHeader, BlogData, BackLink, PostImage } from './styles';

const PortfolioWrapper = ({ title, subtitle, image, html }) => {
  const src = get(image, 'childImageSharp.original.src', '');

  return (
    <Globals>
      <PortfolioPage>
        <Helmet title={`${title} | MKubiak`}>
          <html lang="en" />
        </Helmet>
        <Navigation />
        <BlogHeader>
          <BackLink to="/portfolio">← Back to Blog</BackLink>
          <PostImage src={src} />
          <BlogData>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </BlogData>
        </BlogHeader>
        <Post>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
      </PortfolioPage>
    </Globals>
  );
};

export default PortfolioWrapper;
