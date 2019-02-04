import React from 'react';

import { PostWrapper, Title, SubTitle, Image } from './styles';

const Post = ({ image = {}, path, title, subtitle }) => {
  const { childImageSharp = {} } = image;
  const { original = {} } = childImageSharp;
  const { src = '' } = original;

  return (
    <PostWrapper href={path}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      {src ? <Image src={src} /> : null}
    </PostWrapper>
  );
};

export default Post;
