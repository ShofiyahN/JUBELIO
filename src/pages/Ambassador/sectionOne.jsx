import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';

function SectionOne () {
    
    return(
        <>
        <Container maxW={'7xl'} display={'flex'} flexDirection={['column-reverse', 'row', 'row']} w={'90'} m={'auto'} padding={'1%'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <br />
            <Text fontSize={'40px'} as={'span'} >
            Kenalkan Jubelio ke pebisnis dapat komisi berlimpah
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Mulai promosi lewat media sosial maupun digital dengan jadi Jubelio Ambassador!
          </Text>
          <Stack
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
              Hubungi Kami
            </Button>
            <Button
            as={'a'}
            display={{ base: 'inline-flex', md: 'inline-flex', lg:'none' }}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            >
            Demo
          </Button>
          </Stack>
        </Stack>        
      </Stack>
      <Stack>
        <Image w={'80%'} m={'auto'} src='https://jubelio.com/wp-content/uploads/2023/05/cover-ambassador-1536x1536.png'/>
      </Stack>
    </Container>
        </>
    )
}

export default SectionOne