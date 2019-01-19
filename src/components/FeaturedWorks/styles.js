import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FeaturedWork = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 16px 32px 0 rgba(0, 0, 0, 0.1);
  background-color: #393b40;
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 64px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 232px;
  width: 100%;
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
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
`;
