import { Root } from './App.style.js';
import Info from './components/Info';
import Gallery from './components/Gallery';

function App() {
  return (
    <Root className="App">
        <Info />
        <Gallery />
    </Root>
  );
}

export default App;
