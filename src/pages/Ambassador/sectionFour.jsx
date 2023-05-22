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
        maxW={{ base: 'full', md: '275px', lg: '300px' }}
        w={'full'}
        
        borderRadius="lg"
        overflow="hidden"
        p={5}>
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
            <Flex flexWrap="wrap" gridGap={20} justify="center">
            <Box>
                <Image w={'65%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/04/step1.svg'}/>
              <Card
                heading={'Daftar'}
                description={
                  'Daftarkan diri dengan mengisi formulir secara lengkap.'
                }
                />
            </Box>

            <Box>
                <Image w={'65%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/04/step2-1.svg'}/>
              <Card
                heading={'Tunggu Verifikasi'}
                description={
                  'Jika formulir sudah terverifikasi, tim kami akan menghubungi untuk berikan kode referral.'
                }
                />
            </Box>

            <Box>
                <Image w={'65%'} m={'auto'} mb={5} src={'https://jubelio.com/wp-content/uploads/2023/04/step3-1.svg'}/>
              <Card
                heading={'Mulai Promosi'}
                description={
                  'Sebarkan kode referral di konten media sosial dan digital milikmu.'
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