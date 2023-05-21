import Navbar from "../../components/navbar";
import { Flex, Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { products } from "./utils";

export default function Products() {
    return (
        <Box>
            <Box>
                <Navbar />
            </Box>
            <Box w={'95%'} mx={'auto'}>
                <Flex justifyContent={'space-between'} >
                    <Heading>
                        Katalog
                    </Heading>
                    <AiOutlineSetting />
                </Flex>
            </Box>
            <Flex justifyContent={'space-between'} gap={'10px'}>
                {products.map((item, index) => (
                    <Box key={index} width={'22%'}>
                        <HStack>
                            <Icon src={item.icon} />
                            <Box>
                                <Heading>{item.title}</Heading>
                                <Text>{item.text}</Text>
                            </Box>
                        </HStack>

                    </Box>

                ))}

            </Flex>
        </Box>
    )
}