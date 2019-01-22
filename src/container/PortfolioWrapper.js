import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Navigation from '../components/Navigation';
import PostGlobals from './PostGlobals';
import { PortfolioPage, PortfolioHeader, PortfolioImage, Post, BackLink } from './styles';

const PortfolioWrapper = ({ title, subtitle, image, headerColor, headerMaxWidth, html }) => {
  const src = get(image, 'childImageSharp.original.src', '');

  return (
    <PostGlobals>
      <PortfolioPage>
        <Helmet title={`${title} | MKubiak`}>
          <html lang="en" />
        </Helmet>
        <Navigation />
        <PortfolioHeader background={headerColor}>
          <PortfolioImage maxWidth={headerMaxWidth} src={src} />
        </PortfolioHeader>
        <Post>
          <BackLink to="/portfolio">← Back to Portfolio</BackLink>
          <h1>{title}</h1>
          <h2 style={{ marginBottom: 52 }}>{subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
      </PortfolioPage>
    </PostGlobals>
  );
};

export default PortfolioWrapper;
