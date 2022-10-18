
import {Route , Routes} from 'react-router-dom'
import { Container } from '@chakra-ui/react';
import Home from './pages/Home';
import NavBar from './components/NavBar';


function App() {
  return (
    <Container maxW={{xl:'container.xl' , lg:'container.lg'}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </Container>
  );
}

export default App;
