import { Box, Link } from "@chakra-ui/react";

export default function Abovenavbar() {
    return (
        <Box display={'flex'} bg={'#f2f2f2'} justifyContent={'right'} py={'5px'} gap={'10px'} pr={'10px'} fontSize={'13px'}>
            <Link >
                Marketplace
            </Link>
            <Link>
                Help & FAQs
            </Link>
            <Link>
                Indonesia
            </Link>
        </Box>
    )
}