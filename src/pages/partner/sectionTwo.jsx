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
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={10}>
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
            <Text mt={1} fontSize={'sm'} h={'10vh'}>
              {description}
            </Text>
          </Box>

        </Stack>
      </Box>
    )
  }
  
  function SectionTwo() {
    return (
      <>
        <Box w={{ base: '100%', lg: '60%' }} m={'auto'}>
          <Box p={4} w={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={'3xl'}>Ekosistem kami</Heading>
              <Text color={'gray.600'} fontSize={'md'}>
              Produk terintegrasi dan dapat digunakan dalam satu platform.
              </Text>
            </Stack>
  
          </Box>
        </Box>
  
        <Box p={5}>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                heading={'Fulfillment'}
                description={
                  'Penuhi orderan lebih aman dan nyaman dengan berbagai Partner pilihan Jubelio.'
                }
                href={'#'}
                icon={<Icon as={FcFactory} w={10} h={10} />}
              />
              <Card
                heading={'Shipment'}

                description={
                  'Proses otomatis pengiriman dengan penyedia logistik terkemuka.'
                }
  
                href={'#'}
                icon={<Icon as={FcShipped} w={10} h={10} />}
              />
              <Card
                heading={'Financing'}

                description={
                  'Solusi pembiayaan untuk percepat akselerasi bisnis.'
                }
                href={'#'}
                icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
              />
              <Card
                heading={'Lainnya'}

                description={
                  'Buka relasi baru dengan rekanan yang bekerja sama dengan kami untuk perluas jangkauan pasar.'
                }
                href={'#'}
                icon={<Icon as={FcComments} w={10} h={10} />}
              />
            </Flex>
          </Container>
  
        </Box>
      </>
    )
  }
  export default SectionTwo