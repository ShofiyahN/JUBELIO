import React from "react";

// ** Next JS
import Link from "next/link";
import Image from "next/image";

// ** Chakra
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  chakra,
} from "@chakra-ui/react";

// ** React Icons
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa";

// ** Image
import logo from "../../../public/ld-logo-initial.webp";

// ** Components
const Rating = (props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.200", "gray.600");
  const activeColor = useColorModeValue("teal.500", "teal.200");
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({
        length: max,
      })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  );
};

const Logo = (props) => (
  <chakra.svg
    color="accent"
    height="12"
    width="auto"
    viewBox="0 0 89 89"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z"
    />
  </chakra.svg>
);

const SignUpForm = () => (
  <Container
    maxW="md"
    py={{
      base: "0",
      sm: "8",
    }}
    px={{
      base: "4",
      sm: "10",
    }}
    bg={{
      base: "transparent",
      sm: "bg-surface",
    }}
    boxShadow={{
      base: "none",
      sm: "md",
    }}
    borderRadius={{
      base: "none",
      sm: "xl",
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Center>
          <Image src={logo} alt="LifetimeDesign" width={50} />
        </Center>
        <Stack spacing="3" textAlign="center">
          <Heading size="xs">Create an account</Heading>
          <HStack justify="center" spacing="1">
            <Text color="muted">Already have an account?</Text>
            <Link href="/signin">
              <Button variant="link" colorScheme="teal">
                Log in
              </Button>
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
            <FormHelperText color="muted">
              At least 8 characters long
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing="6">
          <Button variant="primary">Create Account</Button>
        </Stack>
      </Stack>
    </Stack>
  </Container>
);

function index() {
  return (
    <Box
      py={{
        base: "12",
        md: "24",
      }}
      maxW="7xl"
      mx="auto"
    >
      <Stack direction="row" spacing="12">
        <Flex flex="1">
          <SignUpForm />
        </Flex>
        <Center
          flex="1"
          px={{
            lg: "8",
          }}
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <VStack spacing="8">
            <Stack direction="row" spacing="3">
              <Icon as={ImQuotesLeft} boxSize="8" mt="-4" />
              <Heading size="sm" fontWeight="medium" textAlign="center">
                What can I say - I fell in love with Chakra UI Pro.
              </Heading>
              <Icon as={ImQuotesRight} boxSize="8" alignSelf="end" />
            </Stack>
            <VStack spacing="4">
              <Avatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/20296626?v=4"
                name="Simon Holzmayer"
              />
              <Stack textAlign="center" spacing="1">
                <Text fontSize="md" fontWeight="medium" color="muted">
                  Simon Holzmayer
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="muted">
                  simon@chakra-ui.com
                </Text>
              </Stack>
              <Rating defaultValue={5} />
            </VStack>
          </VStack>
        </Center>
      </Stack>
    </Box>
  );
}

export default index;
