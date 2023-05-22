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
    FcComments,
    FcFactory,
    FcMoneyTransfer,
    FcPicture,
    FcPuzzle,
    FcShipped,
  } from 'react-icons/fc';
  
  const CardProps = {
    heading: '',
    description: '',
    icon: null,
    href: ''
  };
  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px', lg: '250px' }}
        w={'full'}
        
        borderRadius="lg"
        overflow="hidden"
        p={10}>
        <Stack align={'start'} spacing={2}>
          <Box mt={2}>
            <Heading size="lg">{heading}</Heading>
            <Text mt={5} fontSize={'md'} h={'15vh'}>
              {description}
            </Text>
          </Box>

        </Stack>
      </Box>
    )
  }
  
  function SectionFour () {
    return (
      <>
        <Box w={{ base: '100%', lg: '60%' }} m={'auto'}>
          <Box p={4} w={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={'3xl'}>4 langkah sukses Program Afiliasi Jubelio </Heading>
              <Text color={'gray.600'} fontSize={'md'}>
              Ikuti cara mudah berikut untuk ikuti program ini.


              </Text>
            </Stack>
  
          </Box>
        </Box>
  
        <Box p={5}>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Box>
                <Image w={'70%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/03/image-10-1.svg'}/>
              <Card
                heading={'Daftar'}
                description={
                  'Klik Gabung Sekarang dan langsung terhubung dengan tim kami. Daftarkan diri dan tunggu kabar selanjutnya dari WhatsApp tim kami.'
                }
                />
            </Box>

            <Box>
                <Image w={'70%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/03/image-11-1.svg'}/>
              <Card
                heading={'Promosi'}
                description={
                  'Mulai promosikan Jubelio ke para pebisnis. Kami berikan kebebasan penuh dalam mengatur strategi promosi.'
                }
                />
            </Box>

            <Box>
                <Image w={'70%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/03/image-12-1.svg'}/>
              <Card
                heading={'Penjualan'}
                description={
                  'Mulai jual produk Jubelio (Omnichannel, Webstore, dan POS) ke para pebisnis. Hasilkan keuntungan tanpa batas.'
                }
                />
            </Box>

            <Box>
                <Image w={'70%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/03/image-13-2.svg'}/>
              <Card
                heading={'Komisi'}
                description={
                  'Setelah pebisnis menggunakan Jubelio, komisi akan didapatkan sesuai Syarat & Ketentuan yang sudah ditetapkan.'
                }
                />
            </Box>
              
            </Flex>
          </Container>
  
        </Box>
      </>
    )
  }
  export default SectionFour 