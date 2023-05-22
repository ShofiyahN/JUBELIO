import { Box, Button, HStack, Heading, VStack, Image, Text, Center, Flex, useBreakpointValue } from "@chakra-ui/react";
import { FiMinusCircle } from "react-icons/fi";

export default function Gudang() {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Box>
            {isDesktop ?
                <Box bg={"#F5FAFF"} >
                    <HStack w={'90%'} mx={'auto'} py={{ base: 0, lg: '30px' }}>
                        <Box>
                            <Heading color={'blue'} mb={'20px'}>GUDANG</Heading>
                            <Heading mb={'30px'}>Visibilitas dan kontrol penuh dari aplikasi</Heading>
                            <Text mb={'30px'} >Kelola gudang lebih mudah dengan sistem terintegrasi .</Text>
                            <Button w={'150px'} h={'60px'} color={'white'} bg={'blue'} >Coba Gratis</Button>
                        </Box>
                        <Center>
                            <Image w={'1000px'} h={'600px'} src={"https://jubelio.com/wp-content/uploads/2023/05/cover-gudang-1536x1536.png"} />
                        </Center>

                    </HStack>
                </Box> :
                <Box bg={"#F5FAFF"} >
                    <Box w={'90%'} mx={'auto'}>
                        <Center>
                            <Image w={'350px'} h={'300px'} src={"https://jubelio.com/wp-content/uploads/2023/05/cover-gudang-1536x1536.png"} />
                        </Center>
                        <Box pb={'50px'}>
                            <Heading color={'blue'} mb={'20px'}>GUDANG</Heading>
                            <Heading mb={'30px'}>Visibilitas dan kontrol penuh dari aplikasi</Heading>
                            <Text mb={'30px'} >Kelola gudang lebih mudah dengan sistem terintegrasi .</Text>
                            <Button w={'150px'} h={'60px'} color={'white'} bg={'blue'} >Coba Gratis</Button>
                        </Box>


                    </Box>
                </Box>
            }

            {isDesktop ?
                <Box w={'90%'} mx={'auto'}>
                    <Center >
                        <VStack mt={'70px'} spacing={'30px'}>
                            <Heading >Dengan dan Tanpa Jubelio Dalam Bisnismu</Heading>
                            <Text >Lihat bagaimana Jubelio memudahkan pengelolaan persediaan produkmu.</Text>
                            <Center bg={"#BADFFF"} w={'90%'} py={'20px'} borderRadius={'10px'}>
                                <Button mr={'20px'} bg={'blue'} color={'white'}>
                                    Tanpa Jubelio
                                </Button>
                                <Button bg={'white'} >
                                    Dengan Jubelio
                                </Button>
                            </Center>
                        </VStack>
                    </Center>
                    <HStack mt={'40px'}>
                        <Center>
                            <Image src={"https://jubelio.com/wp-content/uploads/2023/03/persediaan-tanpa-jubelio-hesti-1.gif"} />

                        </Center>
                        <Box>
                            <HStack spacing={'15px'} mb={'30px'}>
                                <FiMinusCircle fontSize={'30px'} color="red" />
                                <Text>Masih harus update manual stok kamu dari berbagai saluran penjualan?</Text>
                            </HStack>
                            <HStack spacing={'15px'} mb={'30px'}>
                                <FiMinusCircle fontSize={'30px'} color="red" />
                                <Text>Masih perlu banyak karyawan dan sering salah dalam mengelola stok?</Text>
                            </HStack>
                            <HStack spacing={'15px'}>
                                <FiMinusCircle fontSize={'30px'} color="red" />
                                <Text>Masih belum bisa memperkirakan ketersediaan stok kamu kedepannya?</Text>
                            </HStack>

                        </Box>
                    </HStack>
                </Box> :
                <Box w={'90%'} mx={'auto'} mb={'50px'}>
                    <Center >
                        <VStack mt={'70px'} spacing={'30px'}>
                            <Heading >Dengan dan Tanpa Jubelio Dalam Bisnismu</Heading>
                            <Text >Lihat bagaimana Jubelio memudahkan pengelolaan persediaan produkmu.</Text>
                            <VStack bg={"#BADFFF"} w={'90%'} py={'20px'} borderRadius={'10px'}>
                                <Button w={'90%'} bg={'blue'} color={'white'}>
                                    Tanpa Jubelio
                                </Button>
                                <Button w={'90%'} bg={'white'} >
                                    Dengan Jubelio
                                </Button>
                            </VStack>
                        </VStack>
                    </Center>
                    <VStack mt={'40px'}>
                        <Center>
                            <Image src={"https://jubelio.com/wp-content/uploads/2023/03/persediaan-tanpa-jubelio-hesti-1.gif"} />

                        </Center>
                        <Box>
                            <HStack spacing={'30px'} mb={'30px'}>
                                <FiMinusCircle fontSize={'50px'} color="red" />
                                <Text>Masih harus update manual stok kamu dari berbagai saluran penjualan?</Text>
                            </HStack>
                            <HStack spacing={'30px'} mb={'30px'}>
                                <FiMinusCircle fontSize={'50px'} color="red" />
                                <Text>Masih perlu banyak karyawan dan sering salah dalam mengelola stok?</Text>
                            </HStack>
                            <HStack spacing={'30px'}>
                                <FiMinusCircle fontSize={'50px'} color="red" />
                                <Text>Masih belum bisa memperkirakan ketersediaan stok kamu kedepannya?</Text>
                            </HStack>

                        </Box>
                    </VStack>
                </Box>
            }

            <Box bg={"#F5FAFF"}>
                <FiturUnggulan />
            </Box>
            <Box>
                <Bisnis />
            </Box>
            <Box bg={"#e1f0ff"}>
                <Fitur />
            </Box>
            <Box bg={"#F5FAFF"}>
                <Lainnya />
            </Box>

        </Box>
    )
}


const FiturUnggulan = () => {
    const menu = [
        "Stok Opname", "Stok Cadangan", "Revaluasi Stok", "Persentase Stok", "Stok Tidak Terbatas", "Toko Prioritas", "Multi Lokasi", "Multi Origin", "Nomor Serial & Batch", "Barang Laku & Tidak Laku", "Barang Habis, Menipis & Minus", "Proyeksi Barang Habis"
    ]

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Box p={'10px'} w={'90%'} mx={'auto'}>
            <Box>
                <VStack spacing={'20px'} mt={'30px'}>
                    <Heading>Fitur unggulan manajemen persediaan</Heading>
                    <Text>Jelajahi fiturnya yang bisa kamu manfaatkan buat bisnis.</Text>
                </VStack>
            </Box>
            {isDesktop ?
                <HStack spacing={'20px'}>
                    <Box>
                        <Image w={'800px'} src={"https://jubelio.com/wp-content/uploads/2023/03/Penyesuaian-Stok-Terpusat.gif"} />
                    </Box>
                    <Box>
                        <Box bg={'white'} p={'30px'} mt={'130px'} >
                            <Text color={'blue'}>Penyesuaian Stok Terpusat </Text>
                            <Text>Kelola stok lebih mudah untuk berbagai channel penjualan</Text>
                        </Box>
                        <Box>
                            {menu.map((item, index) => (
                                <Box key={index} borderBottom={'1px solid grey'} py={'20px'}>
                                    <Text> {item}</Text>
                                </Box>
                            ))}

                        </Box>
                    </Box>
                </HStack> :
                <VStack spacing={'20px'}>
                    <Box bg={'white'} p={'30px'} mt={'30px'} w={'90%'}>
                        <Text color={'blue'}>Penyesuaian Stok Terpusat </Text>
                        <Text>Kelola stok lebih mudah untuk berbagai channel penjualan</Text>
                    </Box>
                    <Box>
                        <Image w={'400px'} src={"https://jubelio.com/wp-content/uploads/2023/03/Penyesuaian-Stok-Terpusat.gif"} />
                    </Box>

                    <Box w={'90%'} >
                        {menu.map((item, index) => (
                            <Box key={index} borderBottom={'1px solid grey'} py={'20px'}>
                                <Text> {item}</Text>
                            </Box>
                        ))}

                    </Box>

                </VStack>
            }
        </Box>
    )
}

const Bisnis = () => {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (

        <Box w={'90%'} mx={'auto'}>
            <Center mt={'70px'} spacing={'30px'}  >

                <Heading textAlign={'center'} w={{ base: "95%", lg: '50%' }} >Apa kata pebisnis yang sudah manfaatkan fitur Katalog?</Heading>

            </Center>
            {isDesktop ?
                <HStack mt={'40px'} py={'40px'} spacing={'50px'}>
                    <Center>
                        <Image w={'1000px'} src={"https://jubelio.com/wp-content/uploads/2023/03/Asset-35@2x-1.svg"} />

                    </Center>
                    <Box>
                        <Heading size={'lg'} color={'blue'} mb={'30px'}>CUIT BABY WEAR</Heading>
                        <Text mb={'30px'}>Salah satu fitur yang sangat membantu adalah manajemen stok, karena jadi <strong>bisa memaksimalkan potensi dari setiap Toko yang ada tanpa harus menyediakan stok berlebih.</strong></Text>

                        <Heading size={'sm'}>Yandy Suherman</Heading>
                        <Text fontStyle={'italic'}>Director PT. Panca Prima Murya</Text>
                    </Box>
                </HStack> :
                <Box py={'40px'} spacing={'50px'}>
                    <Center>
                        <Image w={'1000px'} src={"https://jubelio.com/wp-content/uploads/2023/03/Asset-35@2x-1.svg"} />

                    </Center>
                    <Box mt={'20px'} w={"80%"} mx={'auto'}>
                        <Heading size={'lg'} color={'blue'} mb={'30px'}>CUIT BABY WEAR</Heading>
                        <Text mb={'30px'}>Salah satu fitur yang sangat membantu adalah manajemen stok, karena jadi <strong>bisa memaksimalkan potensi dari setiap Toko yang ada tanpa harus menyediakan stok berlebih. </strong></Text>

                        <Heading size={'sm'}>Yandy Suherman</Heading>
                        <Text fontStyle={'italic'}>Director PT. Panca Prima Murya</Text>
                    </Box>
                </Box>
            }

        </Box>

    )
}

const Fitur = () => {
    return (
        <Box w={'90%'} mx={'auto'} p={'40px'}>
            <VStack spacing={'30px'}  >
                <Heading textAlign={'center'} >Fitur ini yang bisnismu butuhkan?</Heading>
                <Text fontSize={'20px'} textAlign={'center'} >Stok aman, jualan lancar gak ada lawan!</Text>
                <Button p={'30px'} bg={'blue'} color={'white'}>Coba Gratis</Button>

            </VStack>

        </Box>

    )
}

const Lainnya = () => {

    const icon = [
        {
            title: "Persediaan",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-34.svg",
        },
        {
            title: "Pesanan",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-35.svg",
        },
        {
            title: "Gudang",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-36.svg",
        },
        {
            title: "Pembukuaan",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-37.svg",
        },
        {
            title: "Intelegensi Bisnis",
            image: "https://jubelio.com/wp-content/uploads/2023/03/Frame-38.svg",
        }

    ]

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Box w={'90%'} mx={'auto'} p={'40px'}>
            <VStack spacing={'30px'}  >
                <Heading textAlign={'center'} >Fitur lainnya gak boleh kamu lewatkan</Heading>
                <Text fontSize={'20px'} textAlign={'center'} >Kenal lebih jauh tiap fiturnya dan sesuaikan dengan kebutuhan bisnismu.</Text>

                <Flex gap={{ base: '10px', lg: '60px' }} justifyContent={'center'} flexWrap={'wrap'}>
                    {icon.map((item, index) => (
                        <Box key={index} mb={'20px'}>
                            <Center borderRadius={'10px'} w={'150px'} h={'150px'} bg={'white'} boxShadow={'lg'} _hover={{ pb: "10px" }} >
                                <Image src={item.image} />

                            </Center>
                            <Heading textAlign={'center'} size={'sm'} mt={'10px'}>{item.title}</Heading>
                        </Box>
                    ))}

                </Flex>

            </VStack>

        </Box>

    )
}