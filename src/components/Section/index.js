import React from 'react';

import { SectionWrapper, SectionTitle } from './styles';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      {children}
    </SectionWrapper>
  );
};

export default Section;
