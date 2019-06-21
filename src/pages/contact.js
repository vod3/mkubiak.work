import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import PageWrapper from '../container/PageWrapper';
import Section from '../components/Section';
import { Title, ContactGrid, ContactRow, ContactIcon } from '../styles';
import '../about.css';

const IndexPage = () => (
  <PageWrapper>
    <Section>
      <ContactGrid>
        <Title style={{ marginBottom: 16 }}>Contact Me!</Title>
        <ContactRow>
          <ContactIcon as="a" href="mailto:kontakt@mkubiak.com">
            <MdEmail size={24} style={{ marginRight: 8 }} />
            Email me
          </ContactIcon>
          <ContactIcon as="a" target="_blank" href="https://t.me/mkub9">
            <FaTelegramPlane size={24} style={{ marginRight: 8 }} />
            Message on Telegram
          </ContactIcon>
        </ContactRow>
      </ContactGrid>
    </Section>
  </PageWrapper>
);

export default IndexPage;
