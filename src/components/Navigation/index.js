import React from 'react';

import LogoText from '../../images/logo.svg';
import { Wrapper, Logo, RouterLink } from './styles';

const Navigation = () => {
  return (
    <Wrapper>
      <RouterLink to="/portfolio">Work</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <Logo src={LogoText} />
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </Wrapper>
  );
};

export default Navigation;
