import { useNavigate } from "react-router-dom";
// ** Chakra UI
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useDisclosure,
    Link,
    Image,
    DrawerCloseButton,
    Text
} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'


// ** Custom Components

import { BiSearch } from "react-icons/bi";
import { IoPersonOutline, IoBagOutline, IoHeartOutline } from "react-icons/io5";

// ** React Icons
import { FiMenu } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

// ** Image
import logo from "../../assets/logo/deoapp.png";
import person from '../../assets/logo/person.png'
import { useState } from "react";
import { PopoverIcon } from "./PopoverIcon";
import { ResourcesSubmenu } from "./ResourcesSubMenu";
import Drawers from "./Drawer";

function Navbar() {
    const [change, setChange] = useState()
    const navigate = useNavigate()
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box
            as="section"
            boxShadow="md"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex="sticky"
            bg={'white'}

        >
            <Box as="nav" bg="bg-surface">
                <Container
                    py={{
                        base: "3",
                        lg: "6",
                    }}
                    px={{
                        base: "5",
                        lg: "75",
                    }}

                    maxW="100%"
                    color={'white'}

                >

                    <HStack spacing="10" justify="space-between">
                        <HStack>
                            {isDesktop ?
                                <></> :
                                <>
                                    <IconButton
                                        variant="ghost"
                                        icon={<FiMenu color="black" fontSize="1.6rem" />}
                                        aria-label="Open Menu"
                                        _hover={{ bg: "transparent" }}
                                        onClick={onOpen}
                                    />
                                    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                                        <DrawerOverlay />
                                        <DrawerContent bg={'#E1F0FF'} >
                                            <DrawerCloseButton />
                                            <DrawerHeader borderBottomWidth='1px' >
                                                <Flex justifyContent={'space-around'} py={'10px'}>
                                                    <ButtonGroup>
                                                        <TfiWorld />
                                                        <Button
                                                            variant="link"
                                                            rightIcon={<PopoverIcon />}
                                                            ml={'20px'}

                                                        >
                                                            Bahasa Indonesia
                                                        </Button>
                                                    </ButtonGroup>

                                                </Flex>
                                            </DrawerHeader>
                                            <DrawerBody>
                                                <Drawers />
                                            </DrawerBody>
                                        </DrawerContent>
                                    </Drawer>
                                </>


                            }

                            <Link href="/product/katalog">
                                <Image src={logo} alt="DeoApp" width={150} />
                            </Link>
                        </HStack>


                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">

                                <HStack spacing={10}>
                                    <ButtonGroup variant="link" spacing="8">
                                        <Popover trigger="hover">
                                            <PopoverTrigger>
                                                <Button
                                                    variant="link"
                                                    rightIcon={<PopoverIcon />}
                                                    onClick={() => navigate('/product/katalog')}
                                                >
                                                    Produk
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverBody color={'black'}>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'} >
                                                        <Box as={'button'} onClick={() => navigate('/product/platform')}>
                                                            <Image w={'120px'} src={'https://jubelio.com/wp-content/uploads/2023/03/Jubelio-Omnichannel-1.svg'} />
                                                        </Box>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/product/katalog')} bg={'transparent'}>Katalog</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/product/persediaan')} bg={'transparent'}>Persediaan</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/product/pesanan')} bg={'transparent'}>Pesanan</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/product/gudang')} bg={'transparent'}>Gudang (WMS)</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/product/intelegensi-bisnis')} bg={'transparent'}>Intelegensi Bisnis</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/product/pembukuan')} bg={'transparent'}>Pembukuaan</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Box as={'button'} onClick={() => navigate('/product/pos')}>
                                                            <Image w={'120px'} src={'https://jubelio.com/wp-content/uploads/2023/03/Frame-11.svg'} />
                                                        </Box>
                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Box as={'button'}>
                                                            <Image w={'120px'} src={'https://jubelio.com/wp-content/uploads/2023/03/Frame-10.svg'} />
                                                        </Box>

                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Box as={'button'}>
                                                            <Image w={'120px'} src={'https://jubelio.com/wp-content/uploads/2023/03/Frame-12.svg'} />
                                                        </Box>

                                                    </Box>
                                                    <Box px={'10px'} py={'10px'} >
                                                        <Box as={'button'}>
                                                            <Image w={'120px'} src={'https://jubelio.com/wp-content/uploads/2023/03/Frame-13.svg'} />
                                                        </Box>

                                                    </Box>

                                                </PopoverBody>

                                            </PopoverContent>
                                        </Popover>
                                        <Button onClick={() => navigate('/harga')}>Harga</Button>
                                        <Button onClick={() => navigate('/partner')}>Partner</Button>
                                        <Popover trigger={'hover'}>
                                            <PopoverTrigger>
                                                <Button
                                                    variant="link"
                                                    rightIcon={<PopoverIcon />}
                                                    onClick={() => navigate('/affiliasi/affiliasi')}

                                                >
                                                    Affiliasi
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverBody color={'black'}>
                                                    <Box px={'10px'} py={'15px'} borderBottom={'1px solid #f2f2f2'}>
                                                        <Button onClick={() => navigate('/affiliasi/affiliasi')} bg={'transparent'}>Affiliasi</Button>
                                                    </Box>
                                                    <Box px={'10px'} py={'15px'} >
                                                        <Button onClick={() => navigate('/affiliasi/ambassador')} bg={'transparent'}>Ambassador</Button>
                                                    </Box>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>

                                        <Popover trigger="hover">
                                            <PopoverTrigger>
                                                <Button
                                                    variant="link"
                                                    rightIcon={<PopoverIcon />}

                                                >
                                                    Dukungan
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverBody>
                                                    <Box px={'10px'} py={'15px'} >
                                                        <Button onClick={() => navigate('/dukungan/integrasiapi')} bg={'transparent'}>Integrasi Api</Button>
                                                    </Box>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>

                                    </ButtonGroup>
                                </HStack>
                                <HStack>
                                    <Button py={'15px'} px={'30px'} bg={'blue'} color={'white'}>Jadwalkan Demo</Button>
                                    <Button py={'15px'} px={'30px'} color={'blue'} bg={'white'} border={'2px solid blue'}>Masuk</Button>
                                </HStack>

                                <HStack spacing="7" >
                                    <ButtonGroup>
                                        <Button
                                            variant="link"
                                            rightIcon={<PopoverIcon />}

                                        >
                                            ID
                                        </Button>
                                    </ButtonGroup>
                                </HStack>
                            </Flex>
                        ) : (
                            <></>

                        )}
                    </HStack>
                </Container>
                <Divider />
            </Box>

        </Box>
    );
}

export default Navbar;
