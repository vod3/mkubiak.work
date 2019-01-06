import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import { Row } from '../styles';
import PostGlobals from './PostGlobals';
import { PostPage, Post, PostImage, BackLink } from './styles';

const PostWrapper = ({ children, title, subtitle, image }) => {
  return (
    <PostGlobals>
      <PostPage>
        <Helmet title={`${title} | MKubiak`}>
          <html lang="en" />
        </Helmet>
        <Navigation />
        <Row>
          <BackLink to="/blog">← Back to Articles</BackLink>
        </Row>
        <Post>
          <PostImage image={image} />
          <h1>{title}</h1>
          <h2 style={{ marginBottom: 52 }}>{subtitle}</h2>
          {children}
        </Post>
      </PostPage>
    </PostGlobals>
  );
};

export default PostWrapper;
