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
    <Box  w={{base: '100%', lg:'65%'}} m={'auto'} padding={'3%'}>
        <Box p={4} w={'100%'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Tertarik gabung Program Jubelio Ambassador?
</Heading>
            <Text color={'gray.600'} fontSize={'2xl'}>
            Perkenalkan mudahnya kelola semua operasional bisnis dengan Jubelio ke para pebisnis.
            </Text>
            </Stack>
      
          <Stack alignItems={'center'} mt={'2%'}>
            <Button
            as={'a'}
            w={{base: '50%', lg:'20%'}}
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