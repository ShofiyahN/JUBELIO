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
    FcCheckmark,
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
  
  function SectionSix() {
    return (
      <>  
        <Box p={5}>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={20} justify="center">
              <Card
                heading={'Ekosistem bisnis lengkap'}
                description={
                  'Mudahkan operasional bisnis mulai dari omnichannel, POS, Store, Chat, Fulfillment hingga Shipment.'
                }
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />
              <Card
                heading={'Banyaknya Order'}

                description={
                  '>15 juta order diproses oleh Jubelio setiap bulannya'
                }
  
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />
              <Card
                heading={'Dipercaya oleh pebisnis'}

                description={
                  'Sudah digunakan oleh >30 ribu toko yang tersebar di berbagai channel penjualan.'
                }
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />

            <Card
                heading={'Open Platform API'}

                description={
                  'Ramah dan mudah digunakan oleh developer.'
                }
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />

            <Card
                heading={'Offline to Online (O2O) platform'}

                description={
                  'Tersedia untuk pebisnis yang berjualan di channel fisik maupun digital.'
                }
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />
              
            </Flex>
          </Container>
  
        </Box>
      </>
    )
  }
  export default SectionSix