import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import LottieLoader from 'react-lottie-loader'
  import hello from '../assets/hello.json'
  
  
  export default function MainPage() {
    const marginTopValue = useBreakpointValue({ base: "12%", md: "0%" });
  
    return (
      <>
      <div style={{ padding: "5%"}}>
    
  <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} marginTop={marginTopValue}>
          <Flex flex={1}>
            <LottieLoader animationData={hello} />
          </Flex>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blue.400',
                    zIndex: -1,
                  }}>
                </Text>
                <br />{' '}
                <Text color={'blue.400'} as={'span'}>
                  I'm a Next-Gen Developer
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Embark on a Journey Through My Portfolio
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </div>
      </>
    )
  }
  