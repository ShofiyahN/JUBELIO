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
    DrawerCloseButton
} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
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

                            <Link href="/">
                                <Image src={logo} alt="LifetimeDesign" width={150} />
                            </Link>
                        </HStack>


                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">

                                <HStack spacing={10}>
                                    <ButtonGroup variant="link" spacing="8">
                                        <Button
                                            variant="link"
                                            rightIcon={<PopoverIcon />}


                                        >
                                            Produk
                                        </Button>
                                        <Button>Harga</Button>
                                        <Button>Partner</Button>
                                        <Button
                                            variant="link"
                                            rightIcon={<PopoverIcon />}

                                        >
                                            Affiliasi
                                        </Button>
                                        <Button
                                            variant="link"
                                            rightIcon={<PopoverIcon />}

                                        >
                                            Dukungan
                                        </Button>

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
