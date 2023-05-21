
import RouteApp from './pages/Routes/RoutesApp';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <RouteApp />
    </ChakraProvider>
  );
}

export default App;
