import { Box, Container } from '@radix-ui/themes';
import NextLink from 'next/link';
import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container size="4">
        <Box py="4" mt="auto">
          <p>
            Made by Miuki Miu |{' '}
            <NextLink href="https://x.com/miuki_miu" target="_blank">
              <FaXTwitter />
            </NextLink>{' '}
            <NextLink href="https://www.instagram.com/miukimiu" target="_blank">
              <FaInstagram />
            </NextLink>{' '}
            <NextLink href="https://miukimiu.com/" target="_blank">
              <TbWorldWww />
            </NextLink>
          </p>
        </Box>
      </Container>
    </footer>
  );
};
