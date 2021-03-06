import ChordChartContainer from './components/chord-chart-container/chord-chart-container.component';
import Legend from './components/legend/legend.component'

import SongData from './app-data/data';

import logo from './DjangosDreamsLogoOutline.png'

import './App.css';

const songs = SongData;



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="swing"><img src={logo} className="App-logo" alt="logo" /></div>
      <h1>Django's Dreams</h1>
      <p id="header-tagline">Django Reinhardt chord charts with diagrams</p>
      </header>
      <main className="App-main">
      <div className='container-main'>
     
      <ChordChartContainer songs={songs} />
      
      </div>
      </main>
    </div>
  );
}

export default App;
