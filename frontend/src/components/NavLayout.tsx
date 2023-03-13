import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../assets/emp.png';

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Flex as="nav" w="min(90%,90rem)" mx="auto" py="1rem">
        <Box width="fit-content">
          <Link to="/">
            <Image width="fit-content" src={Logo} alt="logo" />
          </Link>
        </Box>
      </Flex>
      {children}
    </Box>
  );
};

export default NavLayout;
