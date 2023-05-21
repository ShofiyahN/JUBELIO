import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
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

  const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
          maxW={{ base: 'full', md: '275px', lg: '350px' }}
          w={'full'}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={20}>
          <Stack align={'start'} spacing={2}>
            <Flex
              w={30}
              h={30}
              align={'center'}
              justify={'center'}
              color={'white'}
              rounded={'full'}
              bg={useColorModeValue('gray.100', 'gray.700')}>
              {icon}
            </Flex>
            <Box mt={2}>
              <Heading size="md">{heading}</Heading>
              <Text mt={1} fontSize={'sm'}>
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

  function SectionOne () {
    return (
        <Box p={5}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Solusi menyeluruh buat kemudahan operasional bisnismu</Heading>
            </Stack>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                heading={'KATALOG'}
                icon={<Icon as={FcPicture} w={10} h={10} />}
                description={
                  'Upload produk, harga, dan promosi ke berbagai channel penjualan sekaligus.'
                }
                href={'#'}
              />
              <Card
                heading={'PERSEDIAAN'}
                icon={<Icon as={FcPuzzle} w={10} h={10} />}
                description={
                  'Sinkronisasi stok di banyak toko dan gudang'
                }
                href={'#'}
              />
              <Card
                heading={'GUDANG'}
                icon={<Icon as={FcFactory} w={10} h={10} />}
                description={
                  'Proses pesanan dan pengelolaan gudang yang akurat'
                }
                href={'#'}
              />
              <Card
                heading={'PEMBUKUAN'}
                icon={<Icon as={FcCalculator} w={10} h={10} />}
                description={
                  'Rekonsiliasi pelunasan dan pembukuan dengan mudah'
                }
                href={'#'}
              />
              <Card
                heading={'INTELEGENSI BISNIS'}
                icon={<Icon as={FcBusiness} w={10} h={10} />}
                description={
                  'Laporan dan analisa bisnis lengkap'
                }
                href={'#'}
              />
            </Flex>
          </Container>

        </Box>
      )

  }
  export default SectionOne