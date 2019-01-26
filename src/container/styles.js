import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Page = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  width: 100vw;
  padding-top: 134px;
  border-top: 6px solid #ffffff;
  @media (min-width: 600px) {
    padding-top: 280px;
  }
`;

export const PostPage = styled(Page)`
  grid-template-rows: auto auto 1fr;
`;

export const PortfolioPage = styled(Page)`
  padding-top: 0;
  border-top: 0;
  @media (min-width: 600px) {
    padding-top: 0;
  }
`;

export const PortfolioHeader = styled.div`
  width: 100%;
  height: 85vh;
  background: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const PortfolioImage = styled.img`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
`;

export const Main = styled.main`
  display: block;
`;

export const Post = styled.main`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const BlogHeader = styled.div`
  padding-top: 280px;
  width: 100%;
  position: relative;
`;
export const PostImage = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
  width: 100%;
  padding-top: 300px;
  @media (min-width: 600px) {
    padding-top: 552px;
  }
`;

export const BackLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 21px;
  color: #899394;
  line-height: 48px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const BlogData = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 32px 16px;
  left: 0;
  right: 0;
  background-color: rgba(48, 49, 51, 0.7);
`;
