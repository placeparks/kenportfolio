import React from 'react';
import AnimatedCard from './AnimatedCard';
import blockwiseImage from '../assets/Blockwise.JPG';
import nixolImage from '../assets/Nixxsol.JPG';
import dreamImage from '../assets/dream.JPG';
import qrImage from '../assets/qrapp.PNG';
import visaImage from '../assets/visa.PNG';
import khangmanImage from '../assets/kidshangman.PNG';

import { Box, Center, Image, Heading, Text, Stack, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

const cardsData = [
  {
    id: 1,
    image: blockwiseImage,
    title: 'My React-Powered Website!',
    link: 'https://blockwisetech.com/',
  },
  {
    id: 2,
    image: nixolImage,
    title: 'Elegant Desk, White',
    link: 'https://nixxsol.vercel.app/',
  },
  {
    id: 3,
    image: dreamImage,
    title: 'Elegant Desk, White',
    link: 'https://dream-rock.vercel.app/',
  },
  {
    id: 4,
    image: qrImage,
    title: 'My React-Powered Website!',
    link: 'https://qr-appp.netlify.app/',
  },
  {
    id: 5,
    image: visaImage,
    title: 'Visa Consultancy App',
    link: 'https://visa-consultancy.vercel.app/',
  },
  {
    id: 6,
    image: khangmanImage,
    title: 'Hangman Game for Kids',
    link: 'https://kids-hangman-ssvr.vercel.app/auth',
  },
];

const ServicesCards = () => {
  return (
    <div id='services'>
      <h1 style={{textAlign:"center", marginTop:"7%"}}>My React Development Journey</h1>
      <Center py={12} mt={11}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {cardsData.map((card, index) => (
          <AnimatedCard key={card.id} card={card} index={index} />
        ))}
      </SimpleGrid>
    </Center>
    </div>

  );
};

export default ServicesCards;
