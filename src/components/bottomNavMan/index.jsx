
import { HStack, Link, Box } from "@chakra-ui/react"
import { bottomNavMan } from "../../../public/utils/navbar"


export default function BottomNavMan() {
    return (
        <HStack spacing={3} fontSize={'14px'} px={'40px'} bg={'black'}>
            {bottomNavMan.map((item, index) => (
                <Link _hover={{ bg: '#f2f2f2', color: "black" }} key={index} p={3} bg={item === "Sale" || item === "Outlet" ? "red" : "transparent"} color={item === "Sale" || item === "Outlet" ? "black" : "white"}  >
                    {item}
                </Link>
            ))}
        </HStack>
    )
}