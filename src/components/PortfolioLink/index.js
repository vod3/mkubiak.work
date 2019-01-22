import React from 'react';

import { ImageWrapper, Image, PortfolioWork, ContentSide, Title, SubTitle, Excerpt } from './styles';

const PortfolioLink = ({ image = {}, headerColor, path, title, subtitle, excerpt }) => {
  const { childImageSharp = {} } = image;
  const { original = {} } = childImageSharp;
  const { src = '' } = original;
  return (
    <PortfolioWork to={path}>
      <ImageWrapper bgColor={headerColor}>
        <Image src={src} />
      </ImageWrapper>
      <ContentSide>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {excerpt ? <Excerpt>{excerpt}</Excerpt> : null}
      </ContentSide>
    </PortfolioWork>
  );
};

export default PortfolioLink;
