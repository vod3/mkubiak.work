import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const PortfolioWork = styled(Link)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 24px;
  align-items: center;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 16px 32px 0 rgba(0, 0, 0, 0.1);
  background-color: #393b40;
  color: white;
  cursor: pointer;
  text-decoration: none;
  width: 100vw;
  margin: 0 -16px 32px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 600px) {
    width: 100%;
    grid-gap: 32px;
    padding: 32px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    margin: 0 0 64px;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: ${({ bgColor }) => bgColor};
  height: 192px;
  overflow: hidden;
  @media (min-width: 600px) {
    height: 232px;
  }
`;

export const Image = styled.img`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  height: 100%;
  @media (min-width: 600px) {
    height: auto;
    width: 100%;
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 21px;
  font-weight: bold;
  line-height: 24px;
`;
export const SubTitle = styled.h4`
  margin: 0;
  font-size: 21px;
  font-weight: normal;
  line-height: 24px;
  color: #aab2b2;
  margin-bottom: 32px;
`;

export const Excerpt = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
`;
