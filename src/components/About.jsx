"use client"

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import ken from "../assets/1.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <Center id="about" py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "800px" }}
        height={{ sm: "476px", md: "30rem" }}
        direction={{ base: "column", md: "row" }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={ken}
            alt="#"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}  mb={4}>
           Kainat Khosa
          </Heading>
    
          <Text
            textAlign={"center"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
      As a Lead Frontend Developer with 3 years of experience, I excel in MERN stack development, blockchain technologies, and API development. I spearhead a team of 8 frontend developers, driving the execution of complex projects with precision. My portfolio highlights significant achievements in blockchain, including crypto exchange platform development and innovations in crosschain swapping and account abstraction. My technical acumen spans a broad array of tools and languages, with a commitment to continuous learning in emerging technologies.
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
             <FaGithub />
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              <FaLinkedin />
            </Badge>
       
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200"
                          }}
                          _hover={{
                            bg: "blue.500"
                          }}
                          onClick={() => window.open("https://kainat.bio.link/", "_blank")}

            >
              Message
            </Button>
          </Stack>
        </Stack>
      </Stack>
      </Center>
  )
}
