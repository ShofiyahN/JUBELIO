import { BrandIcon } from "./utils"
import { Box, Flex, Image } from "@chakra-ui/react"

export default function Brands() {
    return (
        <Box>
            <Flex gap={"2px"} justifyContent={'space-between'}>
                {BrandIcon.map((item, index) => (
                    <Box key={index} w={"19%"} >
                        <Image src={item} />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}