import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import {
    Button,
    Flex,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    FcBusiness,
    FcCalculator,
    FcFactory,
    FcPicture,
    FcPuzzle,
  } from 'react-icons/fc';
  import { CheckIcon } from '@chakra-ui/icons';
  
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

  const features = Array.apply(null, Array(4)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
 function SectionTwo() {
    return (
        <Box display={{base: "contents", lg:"flex"}} w={'97%'} m={'auto'}>
            <Box p={4} w={["100%","100%",'50%']}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Jadi yang terbaik bersama kami</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                Ribuan toko sudah pakai dan omzet jualan naik hingga 60% cuma dalam 3 bulan aja!
                </Text>
                </Stack>
        
                <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 1}} spacing={10}>
                    {features.map((feature) => (
                    <HStack key={feature.id} align={'top'}>
                        <Box color={'green.400'} px={2}>
                        <Icon as={CheckIcon} />
                        </Box>
                        <VStack align={'start'}>
                        <Text fontWeight={600}>{feature.title}</Text>
                        <Text color={'gray.600'}>{feature.text}</Text>
                        </VStack>
                    </HStack>
                    ))}
                </SimpleGrid>
                </Container>
            </Box>

            <Box p={5} w={["100%","100%",'50%']}>
    
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
            </Flex>
          </Container>

        </Box>

        </Box>
    );
  }

  export default SectionTwo