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

  import {
    FcBusiness,
    FcCalculator,
    FcFactory,
    FcPicture,
    FcPuzzle,
  } from 'react-icons/fc';

  const CardProps = {
    heading: '',
    description: '',
    icon: null,
    href: ''
  };

  const Card = ({ heading, description, image, href }) => {
    return (
        <Box
          maxW={{ base: 'full', md: '275px', lg: '250px' }}
          w={'full'}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={10}>
          <Stack align={'start'} spacing={2}>
            <Box> 
            <Image src={image}/>
            </Box>
            <Box mt={2}>
              <Heading size="md">{heading}</Heading>
              <Text mt={1} fontSize={'sm'} h={'20vh'}>
                {description}
              </Text>
            </Box>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Cek Fitur
            </Button>
          </Stack>
        </Box>
      )
  }

function SectionFive () {
return (
    <>
    <Box  w={'60%'} m={'auto'}>
        <Box p={4} w={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Lebih dari sekadar omnichannel, Jubelio adalah ekosistem</Heading>
            <Text color={'gray.600'} fontSize={'md'}>
            Sistem terlengkap yang dukung penuh semua kebutuhan bisnismu. Tersedia tanpa tambahan biaya.
            </Text>
            </Stack>
      
        </Box>
    </Box> 

    <Box p={5}>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                description={
                  'Buat toko online dalam hitungan menit dengan desain premium.'
                }
                href={'#'}
                image ="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
              />
              <Card
                description={
                  'Integrasikan toko offline dengan aplikasi kasir buat mudahkan operasional.'
                }
                
                href={'#'}
                image ="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
              />
              <Card
                description={
                  'Interaksi langsung dengan pelanggan dari berbagai channel lewat satu platform.'
                }
                href={'#'}
                image ="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
              />
              <Card
                description={
                  'Kirim pesanan mudah dengan pilihan kurir yang terintegrasi.'
                }
                href={'#'}
                image ="https://assets.cdn.filesafe.space/g5ixcUwLF94aB6ka3IVG/media/64174d501639e03e287e2160.png"
              />
            </Flex>
          </Container>

        </Box>
    </>
)
}
export default SectionFive