import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider ,ColorModeScript } from '@chakra-ui/react'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <ColorModeScript initialColorMode='light'></ColorModeScript>
  <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </BrowserRouter>
);
