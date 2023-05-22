
import RouteApp from './Routes/RoutesApp';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './components/footer';
// import Navbar from './components/navbar';
import Navbar from './components/navbar/index2';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <RouteApp />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
