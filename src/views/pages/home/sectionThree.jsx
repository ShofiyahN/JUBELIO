import {
    Container,
    Stack,
    Heading,
    Text,
    Box,
    Button
  } from '@chakra-ui/react';

function SectionThree () {
return (
    <>
    <Box  w={'60%'} m={'auto'} padding={'3%'}>
        <Box p={4} w={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Jadi yang terbaik bersama kami</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
                Ribuan toko sudah pakai dan omzet jualan naik hingga 60% cuma dalam 3 bulan aja!
            </Text>
            </Stack>
      
          <Stack alignItems={'center'} mt={'2%'}>
            <Button
            as={'a'}
            w={'20%'}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#14C38E'}
            href={'#'}
            _hover={{
              bg: '#00FFAB',
            }}
            >
                Coba Gratis
            </Button>
          </Stack>
        </Box>
    </Box>
          
    </>
)
}
export default SectionThree