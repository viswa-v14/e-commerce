import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E-Commerce</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main >
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>Rights Reserved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
