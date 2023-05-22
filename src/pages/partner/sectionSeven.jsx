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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useState } from 'react';
  

export default function SectionSeven () {
    const [change, setChange] = useState(false)
    const [changes, setChanges] = useState(false)
    const [changed, setChanged] = useState(false)
return(
    <>
    <Box w={{ base: '100%', lg: '90%' }} m={'auto'}>
    <Box p={5}>
          <Container maxW={'7xl'} mt={1}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Box 
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={10}>
                <Stack align={'center'} spacing={2}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color={'#454545'} padding={'3%'}>
                        Fulfillment
                    </Text>
                    <Flex flexWrap='wrap' gridGap={100} justify={'center'}>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Praktis-1-1.svg" />
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Keeppack-2-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Titipaja-1-1.svg"/>
                        <Image w={['30%','7%','10%']} src="https://jubelio.com/wp-content/uploads/2023/03/FreshFactory-2.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Swift-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/GudangmuID-1.svg"/>
                        <Image w={['30%','7%','10%']} src="https://jubelio.com/wp-content/uploads/2023/03/TigaLogistik-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/JNElogistics-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/KJNExpress-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/ABStock-1.svg"/>
                    </Flex>

                </Stack>
              </Box>

              <Box 
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={10}>
                <Stack align={'center'} spacing={1}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color={'#454545'} padding={'3%'}>
                        Shipment
                    </Text>
                    <Flex flexWrap='wrap' gridGap={100} justify={'center'}>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Praktis-1-1.svg" />
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Keeppack-2-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Titipaja-1-1.svg"/>
                        <Image w={['30%','7%','10%']} src="https://jubelio.com/wp-content/uploads/2023/03/FreshFactory-2.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/Swift-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/GudangmuID-1.svg"/>
                        <Image w={['30%','7%','10%']} src="https://jubelio.com/wp-content/uploads/2023/03/TigaLogistik-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/JNElogistics-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/KJNExpress-1.svg"/>
                        <Image w={['40%','10%','15%']} src="https://jubelio.com/wp-content/uploads/2023/03/ABStock-1.svg"/>
                    </Flex>

                </Stack>
              </Box>

              <Box 
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={10}>
                <Stack align={'center'} spacing={1}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color={'#454545'} padding={'3%'}>
                        Financing
                    </Text>
                    <Flex flexWrap='wrap' gridGap={100} justify={'center'}>
                        <Image w={['45%','15%','20%']} src="https://jubelio.com/wp-content/uploads/2023/03/Modalku-1-1.svg" />
                        <Image w={['45%','15%','20%']} src="https://jubelio.com/wp-content/uploads/2023/03/Koinworks-1-1.svg"/>
                    </Flex>

                </Stack>
              </Box>

              <Box 
              maxW={{ base: 'full', md: '800px', lg: '1100px' }}
              w={'full'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={10}>
                <Stack align={'center'} spacing={1}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color={'#454545'} padding={'3%'}>
                    Sistem ERP (Enterprise Resource Planning)
                    </Text>
                    <Flex flexWrap='wrap' gridGap={100} justify={'center'}>
                        <Image w={['45%','15%','20%']} src="https://jubelio.com/wp-content/uploads/2023/03/MicrosotDynamics365-1-1.svg" />
                        <Image w={['45%','15%','20%']} src="https://jubelio.com/wp-content/uploads/2023/03/Frame-59.svg"/>
                    </Flex>

                </Stack>
              </Box>
            </Flex>

            <Container maxW={'7xl'} display={'flex'} flexDirection={['column', 'row', 'row']} w={'90'} m={'auto'} padding={'3%'}>
                <Stack
                    w={['100%','50%','50%']}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <br />
                        <Text fontSize={'40px'} >
                        Pertanyaan seputar Partner Jubelio
                        </Text>
                    </Heading>
                    </Stack>        
                </Stack>
                    <Stack w={['100%','50%','50%']}>
                        {change ?
                         <Box as="span" flex='1' textAlign='left' fontSize={'20px'} borderRadius={'5%'} onClick={()=> setChange(false)}>
                         <Box bgColor={'#f5faff'} borderRadius={'2%'} padding ={'4%'}>
                         Apa saja Syarat dan Ketentuan untuk jadi Jubelio Partner?

                         </Box>
                         <Box padding={'5%'}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                         </Box>
                         
                     </Box> :  
                     <Box as="span" flex='1' textAlign='left' fontSize={'20px'} borderRadius={'5%'} onClick={()=> setChange(true)}>
                     <Box bgColor={'#f5faff'} borderRadius={'2%'} padding ={'4%'}>
                         Apa saja Syarat dan Ketentuan untuk jadi Jubelio Partner?

                         </Box>
                
                     </Box>
                        }

                    {changes ?
                         <Box as="span" flex='1' textAlign='left' fontSize={'20px'} borderRadius={'5%'} onClick={()=> setChanges(false)}>
                         <Box bgColor={'#f5faff'} borderRadius={'2%'} padding ={'4%'}>
                         Apa saja Syarat dan Ketentuan untuk jadi Jubelio Partner?

                         </Box>
                         <Box padding={'5%'}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                         </Box>
                         
                     </Box> :  
                     <Box as="span" flex='1' textAlign='left' fontSize={'20px'} borderRadius={'5%'} onClick={()=> setChanges(true)}>
                     <Box bgColor={'#f5faff'} borderRadius={'2%'} padding ={'4%'}>
                         Apa saja Syarat dan Ketentuan untuk jadi Jubelio Partner?

                         </Box>
                
                     </Box>
                        }  

                    {changed ?
                         <Box as="span" flex='1' textAlign='left' fontSize={'20px'} borderRadius={'5%'} onClick={()=> setChanged(false)}>
                         <Box bgColor={'#f5faff'} borderRadius={'2%'} padding ={'4%'}>
                         Apa saja Syarat dan Ketentuan untuk jadi Jubelio Partner?

                         </Box>
                         <Box padding={'5%'}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                         </Box>
                         
                     </Box> :  
                     <Box as="span" flex='1' textAlign='left' fontSize={'20px'} borderRadius={'5%'} onClick={()=> setChanged(true)}>
                     <Box bgColor={'#f5faff'} borderRadius={'2%'} padding ={'4%'}>
                         Apa saja Syarat dan Ketentuan untuk jadi Jubelio Partner?

                         </Box>
                
                     </Box>
                        } 
                   

                        

                        
                    </Stack>
                
                </Container>
          </Container>
  
        </Box>
    </Box>
    </>
)
}