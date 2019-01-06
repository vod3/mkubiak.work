import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
`;

export const PostPage = styled(Page)`
  grid-template-rows: auto auto 1fr;
`;

export const Main = styled.main`
  display: block;
`;

export const Post = styled.main`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  background-color: #fafcffaa;
`;

export const PostImage = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
    width: 50vw;
    position: absolute;
    padding-top: 66%;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center center;
    z-index: -1;
    right: 50%;
    top: -178px;
    filter: grayscale(100%);
    opacity: 0.2;
  }
`;

export const BackLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 21px;
  color: #899394;
  line-height: 48px;
  margin-bottom: 178px;
`;
