import ChordChartContainer from './components/chord-chart-container/chord-chart-container.component';
import ChordDiagram from './components/chord-diagram/chord-diagram.component';

import SongData from './app-data/data';

import './App.css';

const songs = SongData;

const positions = '2x121x';
const firstFret = '1';
const chordName = 'F#m7♭5'

const positions2 = 'x5xooo';
const firstFret2 = '1';
const chordName2 = 'Em/D';

const positions3 = '2123xx';
const firstFret3 = '5';
const chordName3 = 'B♭7'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Django's Dreams</h1>
      <p>Chord charts of classic Django Reinhardt numbers</p>
      </header>
      <main className="App-main">
      <div className='container-main'>
      <ChordChartContainer songs={songs} />
      <ChordDiagram positions={positions} firstFret={firstFret} chordName={chordName} />
      <ChordDiagram positions={positions2} firstFret={firstFret2} chordName={chordName2} />
      <ChordDiagram positions={positions3} firstFret={firstFret3} chordName={chordName3} />
      </div>
      </main>
    </div>
  );
}

export default App;
