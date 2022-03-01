import './App.css';
import Container from '@mui/material/Container';
import PlayerList from './PlayerList.js';

const App = () => (
  <Container fixed>    
    <h2>Head to Head</h2>
    <PlayerList />    
  </Container>
)

export default App;
