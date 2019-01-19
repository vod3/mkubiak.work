import React from 'react';

import LogoText from '../../images/logo.svg';
import { Wrapper, LinkGroup, Logo, ImageLink, RouterLink } from './styles';

const Navigation = () => {
  return (
    <Wrapper>
      <LinkGroup>
        <RouterLink to="/portfolio">Work</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </LinkGroup>
      <ImageLink to="/">
        <Logo src={LogoText} />
      </ImageLink>
      <LinkGroup>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </LinkGroup>
    </Wrapper>
  );
};

export default Navigation;
