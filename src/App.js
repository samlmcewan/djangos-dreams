import './App.css';
import ChordChartContainer from './components/chord-chart-container/chord-chart-container.component';
import SongData from './mock-data/data';

const songs = SongData;

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
      </div>
      </main>
    </div>
  );
}

export default App;
