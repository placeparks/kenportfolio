import React from 'react';
import {
  Box, Flex, Avatar, HStack, IconButton, Button, Menu, MenuButton,
  MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue,
  Stack, Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ToggleBtn from '../ToggleBtn';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Links = [
  { name: 'Home', to: '/', isExternal: false },
  { name: 'About', to: 'about', isExternal: false },
  { name: 'Websites', to: 'services', isExternal: false },
  { name: 'MERN', to: 'mern', isExternal: false },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkHoverBg = useColorModeValue('gray.200', 'gray.700');

  const NavLink = ({ name, to, isExternal }) => {
    return isExternal ? (
      <ChakraLink as={RouterNavLink} to={to} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: linkHoverBg }}>
        {name}
      </ChakraLink>
    ) : (
      <ScrollLink to={to} smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer', display: 'block' }}>
        <Box as="span" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: linkHoverBg }}>
          {name}
        </Box>
      </ScrollLink>
    );
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="fixed" width="full" zIndex="banner">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(({ name, to, isExternal }) => (
              <NavLink key={name} name={name} to={to} isExternal={isExternal} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <ToggleBtn />
            <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
              <Avatar size={'sm'} src="https://amethyst-sound-orangutan-120.mypinata.cloud/ipfs/QmVDvdGAmY2FWnxXFY8cdKN1YszoY9vR6mzVPH4a5auBUG" />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ name, to, isExternal }) => (
              <NavLink key={name} name={name} to={to} isExternal={isExternal} />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
