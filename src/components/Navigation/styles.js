import styled from '@emotion/styled';
import { Link as UnstyledLink } from 'gatsby';

export const Wrapper = styled.header`
  display: grid;
  justify-content: flex-start;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 500px;
  right: 0;
  margin: 0 auto;
  width: 100%;
  grid-gap: 16px;
  @media (min-width: 600px) {
    align-items: center;
    justify-content: center;
    grid-template-rows: auto;
    grid-template-columns: 1fr auto 1fr;
    padding: 48px 16px;
  }
`;

export const LinkGroup = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  text-align: center;
  @media (max-width: 599px) {
    justify-content: flex-start;
    order: 2;
  }
`;

export const ImageLink = styled(UnstyledLink)`
  @media (max-width: 599px) {
    grid-column: 1 / span 2;
    order: 1;
  }
`;

export const Logo = styled.img`
  width: 40px;
  @media (min-width: 600px) {
    width: 64px;
  }
`;

export const RouterLink = styled(UnstyledLink)`
  display: block;
  line-height: 20px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
