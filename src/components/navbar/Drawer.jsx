import { Box, Button, Text, VStack, Heading } from "@chakra-ui/react"
import { Menus } from "./utils"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Drawers() {
    const [menu, setMenu] = useState()
    const [change, setChange] = useState(false)
    const handleChange = (item) => {
        if (item.title == "Produk") {
            setChange(!change)
            setMenu(item)

        }
        if (item.title == "Affiliasi") {
            setMenu(item)

        }
        if (item.title == "Dukungan") {
            setMenu(item)

        }
    }
    return (
        <Box px={'10px'}>
            {Menus.map((item, index) => (
                <Box key={index} py={'15px'} onClick={() => handleChange(item)}>
                    <Link> <Heading size={'md'}>{item.title}</Heading>
                    </Link>
                    <Box>
                        {(item.resource !== undefined ? item.resource : []).map((x, i) => (
                            <Box px={'10px'} py={'10px'} >
                                <Link>{x}</Link>
                            </Box>

                        ))}
                    </Box>

                </Box>


            ))}

            <Box mt={'50px'}>
                <Button bg={'blue'} w={'70%'} mb={'20px'} color={'white'}>Coba Gratis</Button>
                <Button bg={'white'} w={'70%'} border={'1px solid black'} >Masuk</Button>
            </Box>

        </Box>
    )
} 