import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';

export default function SectionSix () {
 return (
    <>
    <Box w={{ base: '100%', lg: '60%' }} m={'auto'} paddingTop={'5%'}>
        <Box p={4} w={'100%'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Partner Kami</Heading>
            <Text color={'gray.600'} fontSize={'md'}>
            Lebih dari 24 partner di Indonesia sudah bekerja sama untuk ciptakan
            platform bisnis berbasis ekosistem yang dapat digunakan
            oleh seluruh pebisnis online dan offline.
            </Text>
          </Stack>

        </Box>
      </Box>
    </>
 )
}
