import { useNavigate } from "react-router-dom";
import logo from "../../utils/logo/deoapp-logo.png";
import person from "../../utils/logo/person.png"
import { useState } from "react";
import { produk } from "./utils";



import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react'

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
  Center
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import { BiSearch } from "react-icons/bi";
import { IoPersonOutline, IoBagOutline, IoHeartOutline } from "react-icons/io5";


// ** React Icons
import { FiMenu } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineNotificationsNone } from "react-icons/md";



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
      bg={'white'}
    >
      <Box as="nav" bg="bg-surface">
        <Container
          py={{
            base: "3",
            lg: "3",
          }}
          px={{ base: "10", lg: "20" }}
          maxW="100%"
          color={'black'}

        >

          <HStack spacing="10" justify={'space-between'} >
            <HStack>
              {isDesktop ?
                <></> :
                <>
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                    _hover={{ bg: "transparent" }}
                    onClick={onOpen}
                  />
                  <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent >
                      <DrawerHeader borderBottomWidth='1px' >
                        <Flex justifyContent={'space-around'} py={'10px'}>
                          <Button h={'25px'} flex={1} borderRight={'3px solid #f2f2f2'} px={'30px'} borderRadius={'none'} bg={'transparent'} _hover={{ bg: "transparent" }} onClick={() => setChange(false)}>WOMEN</Button>
                          <Button h={'25px'} flex={1} bg={'transparent'} px={'30px'} _hover={{ bg: "transparent" }} onClick={() => setChange(true)}>MEN</Button>
                        </Flex>
                      </DrawerHeader>
                      <DrawerBody>
                        {/* {change ? <MenuMan /> : <MenuWomen />} */}
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>


              }
              <Link>
                <CgMenuGridO fontSize={'50px'} />
              </Link>
              <Link href="/">
                <Image src={logo} alt="DeoApp" width={50} />
              </Link>
            </HStack>


            {isDesktop ? (
              <Flex justify="space-between" flex="1">

                <HStack spacing={10}>
                  <Link>
                    <VscGraph fontSize={'30px'} />
                  </Link>
                  <ButtonGroup variant="link" spacing="8">
                    <Popover trigger="hover">
                      <PopoverTrigger>
                        <Button
                          variant="link"
                          // rightIcon={<PopoverIcon isOpen={isOpen} />}
                          onClick={() => navigate('/men')}
                          color={'black'}
                        >
                          Produk
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverBody>
                          {
                            produk.map((item, index) => (
                              <Center py={'10px'} borderBottom={'1px solid #f2f2f2'} >
                                <Link _hover={{ color: "blue" }}>
                                  {item.title}
                                </Link>

                              </Center>
                            ))
                          }
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>

                  </ButtonGroup>
                  <ButtonGroup variant="link" spacing="8">
                    <Button
                      variant="link"
                      // rightIcon={<PopoverIcon isOpen={isOpen2} />}
                      onClick={() => navigate('/women')}
                      color={'black'}
                    >
                      Harga
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup variant="link" spacing="8">
                    <Button
                      variant="link"
                      // rightIcon={<PopoverIcon isOpen={isOpen2} />}
                      onClick={() => navigate('/women')}
                      color={'black'}
                    >
                      Partner
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup variant="link" spacing="8">
                    <Button
                      variant="link"
                      // rightIcon={<PopoverIcon isOpen={isOpen2} />}
                      onClick={() => navigate('/women')}
                      color={'black'}
                    >
                      Affiliasi
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup variant="link" spacing="8">
                    <Button
                      variant="link"
                      // rightIcon={<PopoverIcon isOpen={isOpen2} />}
                      onClick={() => navigate('/women')}
                      color={'black'}
                    >
                      Dukungan
                    </Button>
                  </ButtonGroup>
                </HStack>

                <HStack spacing="7" >
                  <Link href="/signin" >
                    <MdOutlineNotificationsNone fontSize={'27px'} />
                  </Link>
                  <Link href="/signin">
                    <Image borderRadius={'full'} w={'40px'} src={person} />
                  </Link>

                  {/* <Link href="/signin">
                    <Button variant="ghost">Sign in</Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="primary">Sign up</Button>
                  </Link> */}
                </HStack>
              </Flex>
            ) : (
              <HStack spacing="3" >
                <Link href="/signin" >
                  <BiSearch fontSize={'24px'} color={'white'} />
                </Link>
                <Link href="/signin" >
                  <IoPersonOutline fontSize={'22px'} />
                </Link>
                <Link href="/signin">
                  <IoHeartOutline fontSize={'22px'} />
                </Link>
                <Link href="/signin">
                  <IoBagOutline fontSize={'22px'} />
                </Link>

                {/* <Link href="/signin">
                    <Button variant="ghost">Sign in</Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="primary">Sign up</Button>
                  </Link> */}

              </HStack>

            )}
          </HStack>
        </Container>
        <Divider />
      </Box>



      {/* <ResourcesSubmenu isOpen={isDesktop && isOpen} />
      <ResourcesSubmenu isOpen={isDesktop && isOpen2} /> */}
    </Box>
  );
}

export default Navbar;
