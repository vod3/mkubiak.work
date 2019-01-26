import styled from '@emotion/styled';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  font-style: italic;
  line-height: 48px;
`;
export const SubTitle = styled.h4`
  margin: 0;
  font-size: 32px;
  font-weight: normal;
  font-style: italic;
  line-height: 48px;
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
