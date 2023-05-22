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
  
  function SectionFive() {
    return (
      <>  
        <Box p={10}>
          <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={20} justify="center">
              <Card
                heading={'Dukungan Penuh'}
                description={
                  'Bantuan menyeluruh mulai dari teknis hingga operasional dengan tim terbaik kami.'
                }
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />
              <Card
                heading={'Ekspansi Bisnis'}

                description={
                  'Kesempatan besar untuk perluas koneksi bisnis yang menguntungkan.'
                }
  
                href={'#'}
                icon={<Icon as={FcCheckmark} w={10} h={10} />}
              />
              <Card
                heading={'Sumber Pendapatan'}

                description={
                  'Buka sumber pendapatan baru untuk majukan bisnis lebih jauh lagi.'
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
  export default SectionFive