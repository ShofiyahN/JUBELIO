import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ** Chakra
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  Center,
} from "@chakra-ui/react";

// ** React Icons
import { HiEye, HiEyeOff } from "react-icons/hi";
import Navbar from "@/components/navbar";

// ** Image
import logo from "../../../public/ld-logo-initial.webp";

const PasswordField = forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);
  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };
  return (
    <FormControl>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={mergeRef}
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";

function index() {
  return (
    <>
      <Container
        maxW="lg"
        py={{
          base: "12",
          md: "24",
        }}
        px={{
          base: "0",
          sm: "8",
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Center>
              <Image src={logo} alt="LifetimeDesign" width={50} />
            </Center>

            <Stack
              spacing={{
                base: "2",
                md: "3",
              }}
              textAlign="center"
            >
              <Heading
                size={{
                  base: "xs",
                  md: "sm",
                }}
              >
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>

                <Link href="/signup">
                  <Button variant="link" colorScheme="teal">
                    Sign up
                  </Button>
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <Box
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
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <PasswordField />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="teal" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button>Sign in</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default index;