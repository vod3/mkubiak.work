import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Navigation from '../components/Navigation';
import Globals from '../Globals';
import { Row } from '../styles';
import { PostPage, Post, BackLink } from './styles';

const PostWrapper = ({ children, title, subtitle, image }) => {
  const src = get(image, 'childImageSharp.original.src', '');
  console.log(src);

  return (
    <Globals>
      <PostPage>
        <Helmet title={`${title} | MKubiak`}>
          <html lang="en" />
        </Helmet>
        <Navigation />
        <Row>
          <BackLink to="/blog">← Back to Articles</BackLink>
        </Row>
        <Post>
          {/* <PostImage image={src} /> */}
          <h1>{title}</h1>
          <h2 style={{ marginBottom: 52 }}>{subtitle}</h2>
          {children}
        </Post>
      </PostPage>
    </Globals>
  );
};

export default PostWrapper;
