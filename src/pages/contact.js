import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import PageWrapper from '../container/PageWrapper';
import Section from '../components/Section';
import Marvin from '../images/marvin.png';
import { TextGrid, Title, MarvImage, ContactIcon } from '../styles';
import '../about.css';

const IndexPage = () => (
  <PageWrapper>
    <Section>
      <TextGrid className="aboutGrid">
        <MarvImage src={Marvin} title="Avatar image of me" />
        <div className="aboutTitle">
          <Title style={{ marginBottom: 16 }}>Contact Me!</Title>
          <ContactIcon href="mailto:kontakt@mkubiak.com" title="Send me an Email">
            <MdEmail size={24} />
          </ContactIcon>
          <ContactIcon target="_blank" href="https://t.me/mkub9" title="Contact me on Telegram">
            <FaTelegramPlane size={24} />
          </ContactIcon>
        </div>
      </TextGrid>
    </Section>
  </PageWrapper>
);

export default IndexPage;
