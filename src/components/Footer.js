import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';
import { BREAKPOINT } from '../utils/constants';

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <ButtonLink
        href="https://mobile.twitter.com/lewislbr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </ButtonLink>
      <ButtonLink
        href="https://www.instagram.com/thoughts_by_vivek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </ButtonLink>
      <ButtonLink
        href="https://www.facebook.com/thoughtsbyvivek"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </ButtonLink>
    </Container>
  );
};
