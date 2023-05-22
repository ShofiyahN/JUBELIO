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

  export default function SectionSeven () {
    return (
       <>
       <Box w={{ base: '100%', lg: '60%' }} m={'auto'} paddingTop={'5%'}>
           <Box p={4} w={'100%'}>
             <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
               <Heading fontSize={'3xl'}>Mitra Terpercaya Kami</Heading>
             </Stack>
   
           </Box>
         </Box>

         <Box w={{ base: '100%', lg: '100%' }} m={'auto'}>
            <Box p={5}>
                <Container maxW={'7xl'} mt={1}>
                    <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Box 
                    maxW={{ base: 'full', md: '800px', lg: '1100px' }}
                    w={'full'}
                    overflow="hidden"
                    p={10}>
                        <Stack align={'center'} spacing={2}>
                            <Flex flexWrap='wrap' gridGap={100} justify={'center'}>
                                <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Praktis-1-1.svg" />
                                <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Keeppack-2-1.svg"/>
                                <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Titipaja-1-1.svg"/>
                                <Image w={['30%','7%','10%']} src="https://jubelio.com/wp-content/uploads/2023/03/FreshFactory-2.svg"/>
                            </Flex>

                        </Stack>
                    </Box>
                    </Flex>
                    </Container>
                    </Box>
                    </Box>
       </>
    )
   }