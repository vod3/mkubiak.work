import styled from '@emotion/styled';

export const Row = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
`;

export const TextGrid = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Title = styled.h1`
  ${({ single }) => (single ? 'margin-bottom: 16px;' : '')}
  @media (min-width: 600px) {
    ${({ single }) => (single ? 'margin-bottom: 72px;' : '')}
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 16px;
  @media (min-width: 600px) {
    margin-bottom: 72px;
  }
`;
