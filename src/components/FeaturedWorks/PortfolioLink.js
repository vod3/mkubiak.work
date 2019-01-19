import React from 'react';

import { Image, FeaturedWork, ContentSide, Title, SubTitle, Excerpt } from './styles';

const PortfolioLink = ({ image = {}, path, title, subtitle, excerpt }) => {
  const { childImageSharp = {} } = image;
  const { original = {} } = childImageSharp;
  const { src = '' } = original;
  return (
    <FeaturedWork to={path}>
      <Image image={src} />
      <ContentSide>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {excerpt ? <Excerpt>{excerpt}</Excerpt> : null}
      </ContentSide>
    </FeaturedWork>
  );
};

export default PortfolioLink;
