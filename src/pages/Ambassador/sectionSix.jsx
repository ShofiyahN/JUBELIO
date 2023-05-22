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
import { useState } from 'react';

export default function SectionSix () {
    const [change, setChange] = useState(false)
    const [changes, setChanges] = useState(false)
    const [changed, setChanged] = useState(false)
    return(
        <Container maxW={'7xl'} display={'flex'} flexDirection={['column', 'row', 'row']} w={'85%'} m={'auto'} padding={'3%'}>
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
                        <Text fontSize={'30px'} w={'80%'} >
                        Pertanyaan seputar Program Afiliasi Jubelio
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
    )
}