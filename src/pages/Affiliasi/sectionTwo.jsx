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
              <Heading fontSize={'3xl'}>Platform bisnis dengan ekosistem terlengkap</Heading>
              <Text color={'gray.600'} fontSize={'md'}>
              Solusi omnichannel untuk penjual online dan offline dalam satu platofrm.
              </Text>
            </Stack>
  
          </Box>
        </Box>
  
        <Box p={5}>
          <Container maxW={'6xl'} mt={2}>
            <Flex flexWrap="wrap" gap={20} justify="center">
              <Card
                heading={'Jubelio Omnichannel'}
                description={
                  'Kontrol semua operasional bisnis dalam satu platform terintegrasi.'
                }
                href={'#'}
                icon={<Icon as={FcFactory} w={10} h={10} />}
              />
              <Card
                heading={'Sistem Gudang (WMS)'}

                description={
                  'Visibilitas dan kontrol penuh kelola gudang langsung lewat aplikasi.'
                }
  
                href={'#'}
                icon={<Icon as={FcShipped} w={10} h={10} />}
              />
              <Card
                heading={'Jubelio POS'}

                description={
                  'Aplikasi kasir gratis jualan online dan offline agar bisnis berjalan lebih optimal.'
                }
                href={'#'}
                icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
              />
              <Card
                heading={'Jubelio Store'}

                description={
                  'Buat toko online dengan desain premium tanpa keluarkan biaya apa pun.'
                }
                href={'#'}
                icon={<Icon as={FcComments} w={10} h={10} />}
              />
              <Card
                heading={'Fulfillment'}

                description={
                  'Urus pemenuhan orderan lebih nyaman dan aman dengan partner terbaik.'
                }
                href={'#'}
                icon={<Icon as={FcComments} w={10} h={10} />}
              />
              <Card
                heading={'Jubelio Chat'}

                description={
                  'Sambungkan pesan dan berinteraksi dengan pelanggan di berbagai marketplace lewat satu platform.'
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