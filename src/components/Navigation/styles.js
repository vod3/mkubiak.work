import styled from '@emotion/styled';
import { Link as UnstyledLink } from 'gatsby';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  margin-bottom: 128px;
`;

export const Logo = styled.img`
  width: 40px;
  margin: 0 24px;
  @media (min-width: 600px) {
    width: 64px;
  }
`;

export const RouterLink = styled(UnstyledLink)`
  display: block;
  line-height: 20px;
  margin: 0 8px;
  text-decoration: none;
  color: #182837;
  font-weight: 700;
  @media (min-width: 600px) {
    margin: 0 24px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  display: block;
  line-height: 20px;
  margin: 0 24px;
  text-decoration: none;
  color: #182837;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
