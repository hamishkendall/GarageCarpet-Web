import './App.css';

import NavBar from './components/navbar/NavBar';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">

      <NavBar />

      <div className='Container'>
        <Carousel />
        <h1>test</h1>
      </div>

    </div>
  );
}

export default App;
