import styled from '@emotion/styled';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

export const PostWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  appearance: none;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  font-style: italic;
  line-height: 48px;
  color: #ffffff;
`;
export const SubTitle = styled.h4`
  margin: 0;
  font-size: 24px;
  font-weight: normal;
  line-height: 1.3;
  color: #aab2b2;
  margin-bottom: 32px;
`;
export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media (min-width: 600px) {
    height: 408px;
  }
`;
