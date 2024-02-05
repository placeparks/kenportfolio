import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Box, Image, Heading, Stack, Button, useColorModeValue, Text } from '@chakra-ui/react';

const AnimatedCard = ({ card, index }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const boxShadowColor = useColorModeValue('2xl', 'dark-lg');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-50px' : '50px'})`,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Function to handle button click, navigating to the card's link
  const handleVisit = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <animated.div ref={ref} style={animation}>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        h="full"
        bg={bgColor}
        boxShadow={boxShadowColor}
        rounded="lg"
        pos="relative"
        zIndex={1}>
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="240px"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${card.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}>
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={card.image}
            alt={card.title}
          />
        </Box>
        <Stack pt={10} align="center">
          {card.brand && (
            <Text color="gray.500" fontSize="sm" textTransform="uppercase">
              {card.brand}
            </Text>
          )}
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            {card.title}
          </Heading>
          <Button
            colorScheme="blue"
            mt={4}
            onClick={() => handleVisit(card.link)} // Use the card's link for the button's action
          >
            Visit
          </Button>
        </Stack>
      </Box>
    </animated.div>
  );
};

export default AnimatedCard;
