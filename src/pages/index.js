import { useNavigate } from "react-router-dom";
import { Link, Flex, Heading, Box, Center, Text, VStack, HStack, useBreakpointValue, Image } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { BrandIcon, title, FBIcon, KosmetikIcon, ElectronicIcon, KesehatanIcon, videos } from "./utils";
import { AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
export default function Home() {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [icon, setIcon] = useState()

  const handleChange = (item) => {
    if (item == "Fashion") {
      setIcon(BrandIcon)
    }
    if (item == "F&B") {
      setIcon(FBIcon)

    }
    if (item == "Kosmetik") {
      setIcon(KosmetikIcon)
    }
    if (item == "Elektronik") {
      setIcon(ElectronicIcon)

    }
    if (item == "Kesehatan") {
      setIcon(KesehatanIcon)
    }

  }


  return (
    <>
      {isDesktop ?
        <Box>
          <Box>
            <Navbar />
          </Box>
          <Box w={'90%'} mx={'auto'} mt={10} pb={'20px'} borderBottom={'2px solid #f2f2f2'}>
            <Flex justifyContent={'space-between'} >
              <Heading size={'lg'}>
                Katalog
              </Heading>
              <AiOutlineSetting fontSize={35} />
            </Flex>
          </Box>
          <Box bg={'#f2f2f2'} pt={"20px"}>
            <Flex justifyContent={'space-between'} w={'60%'} mx={'auto'} mt={'40px'}>
              {title.map((item, index) => (
                <Center key={index} _hover={{ bg: "white" }} p={'20px'} width={'20%'} onClick={() => handleChange(item)}>
                  <Link>{item}</Link>
                </Center>
              ))}

            </Flex>
            <Flex bg={'white'} pb={'20px'} gap={"2px"} justifyContent={'space-between'} w={'90%'} mx={'auto'}>
              {(icon !== undefined ? icon : BrandIcon).map((item, index) => (
                <Center key={index} w={"19%"} h={'200px'} boxShadow={'lg'}>
                  <Image src={item} />
                </Center>
              ))}
            </Flex>
          </Box>
          <HStack w={'90%'} mx={'auto'} >
            <Box>
              <Image src={videos[0].image} w={"400px"} />
            </Box>
            <Box>
              <Heading>
                {videos[0].title}
              </Heading>
            </Box>

          </HStack>
        </Box> : <> </>
      }
    </>
  );
}
