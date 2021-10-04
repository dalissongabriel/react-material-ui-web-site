import { NavBar } from './components/NavBar'
import { Container, CssBaseline } from '@material-ui/core';
import { GridLayout } from './components/GridLayout';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </>
  );
}

export default App;
