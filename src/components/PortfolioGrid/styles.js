import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 8px;
  padding: 4px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Portfolio = styled(Link)`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 60%;
  width: 100%;
  cursor: pointer;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    background-color: #00000099;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  &:hover {
    > div {
      opacity: 1;
    }
  }
`;
