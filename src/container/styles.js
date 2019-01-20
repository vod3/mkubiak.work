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
  max-width: 800px;
`;

export const Main = styled.main`
  display: block;
`;

export const Post = styled.main`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 16px;
`;

export const BackLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 21px;
  color: #899394;
  line-height: 48px;
  margin-bottom: 16px;
`;
