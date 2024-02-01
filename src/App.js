import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

//components
import Header from './components/Header/Header';
import Home from './components/Home'
import DetailView from './components/ItemDetails/DetailView';
//import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
 
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
