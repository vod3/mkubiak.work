import React from 'react';

import { Portfolio } from './styles';

const PortfolioLink = ({ image, path, title }) => {
  return (
    <Portfolio image={image} to={path}>
      <div>{title}</div>
    </Portfolio>
  );
};

export default PortfolioLink;
