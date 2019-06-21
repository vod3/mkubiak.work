import styled from '@emotion/styled';

export const Row = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
`;

export const TextGrid = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.h1`
  ${({ single }) => (single ? 'margin-bottom: 16px;' : '')}
  @media (min-width: 600px) {
    ${({ single }) => (single ? 'margin-bottom: 72px;' : '')}
  }
  @media (min-width: 800px) {
    grid-column: 2;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 16px;
  @media (min-width: 600px) {
    margin-bottom: 72px;
  }
  @media (min-width: 800px) {
    grid-column: 2;
    margin-bottom: 0;
  }
`;

export const MarvImage = styled.img`
  min-width: 186px;
  max-width: 530px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 32px;
  @media (min-width: 600px) {
    margin-bottom: 128px;
  }
  @media (min-width: 800px) {
    grid-column: 1;
    margin-bottom: 0;
  }
`;

export const ContactIcon = styled.a`
  color: white;
  cursor: pointer;
  margin-right: 16px;
`;
