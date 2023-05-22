import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    HStack,
    Center
  } from '@chakra-ui/react';

export default function IntegrasiAPI() {
    return (
        <>
        <Box w={'100%'} padding={'3%'}>
            <Stack>
                <Image w={['100%','60%','65%']} m={'auto'} paddingTop={{base:'8%'}} src={'https://jubelio.com/wp-content/uploads/2023/05/cover-integrasi-api-1-768x277.png'}/>
            </Stack>
            <Box w={{ base: '100%', lg: '60%' }} m={'auto'}>
          <Box p={4} w={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={['4xl','3xl','3xl']}>Integrasi API</Heading>
              <Text color={'gray.600'} fontSize={{base: 'sm',lg: 'md'}}>
              Jubelio menyediakan fitur lengkap layanan omnichannel. Untuk hal lainnya yang tidak kami sediakan, bangun dan kembangkan kemampuan tambahan Jubelio sesuai kebutuhan Anda dengan mudah menggunakan Application Program Interface (API) kami.
              </Text>
            </Stack>

            <Center>

            <HStack
                mt={'4%'}
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}>
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'red'}
                    bg={'#14C38E'}
                    _hover={{ bg: '#00FFAB' }}>
                Pelajari API Kami
                </Button>
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'red'}
                    bg={'#14C38E'}
                    _hover={{ bg: '#00FFAB' }}>
                Hubungi Kami
                </Button>
                
            </HStack>
            </Center>
  
          </Box>
        </Box>
            
        </Box>
        </>
    )
}