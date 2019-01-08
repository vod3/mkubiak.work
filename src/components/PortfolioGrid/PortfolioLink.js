import React from 'react';

import { Portfolio } from './styles';

const PortfolioLink = ({ image = {}, path, title }) => {
  const { childImageSharp = {} } = image;
  const { original = {} } = childImageSharp;
  const { src = '' } = original;
  return (
    <Portfolio image={src} to={path}>
      <div>{title}</div>
    </Portfolio>
  );
};

export default PortfolioLink;
