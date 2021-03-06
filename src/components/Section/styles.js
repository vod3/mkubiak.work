import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 32px;
  @media (min-width: 600px) {
    padding: 0 48px;
    margin-bottom: 184px;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 900;
  font-style: italic;
  font-size: 21px;
  line-height: 32px;
  margin: 0;
  color: #ffffff;
  margin-bottom: 32px;
  @media (min-width: 600px) {
    margin-bottom: 56px;
    font-size: 40px;
    line-height: 48px;
  }
`;
