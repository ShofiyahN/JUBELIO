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
import { FaCarCrash } from 'react-icons/fa';
  
  import {
      FcAdvertising,
    FcBusiness,
    FcCalculator,
    FcComments,
    FcFactory,
    FcMoneyTransfer,
    FcNumericalSorting12,
    FcPicture,
    FcPrivacy,
    FcPuzzle,
    FcShipped,
    FcShop,
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
              w={40}
              h={40}
              align={'center'}
              justify={'center'}
              color={'white'}
              rounded={'full'}
              >
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
              <Heading fontSize={'3xl'}>Apa saja keuntungan jadi Jubelio Ambassador?</Heading>
              <Text color={'gray.600'} fontSize={'md'}>
              Jalan tepat untuk raih komisi berlipat.
              </Text>
            </Stack>
          </Box>
        </Box>
  
        <Box p={5}>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                heading={'Dapatkan komisi dari Jubelio'}
                icon={<Icon as={FcMoneyTransfer} w={40} h={40} />}
              />
              <Card
                heading={'Shipment'}
                icon={<Icon as={FcShipped} w={40} h={40} />}
              />
              <Card
                heading={'Tanpa perlu gunakan modal'}
                icon={<Icon as={FcBusiness} w={40} h={40} />}
              />
              <Card
                heading={'Kode unik khusus sebagai Jubelio Ambassador'}
                icon={<Icon as={FcPrivacy} w={40} h={40} />}
              />
            </Flex>
          </Container>
  
        </Box>
      </>
    )
  }
  export default SectionTwo