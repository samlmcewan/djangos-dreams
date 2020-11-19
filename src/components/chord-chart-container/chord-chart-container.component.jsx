import ChordChart from '../chord-chart/chord-chart.component';

import { nanoid } from 'nanoid';

import './chord-chart-container.styles.scss';

const ChordChartContainer = ({songs}) => {
  
    
        const ChordCharts = songs.map(song=> <ChordChart chords={song.chords} title={song.title} year={song.year} bpm={song.bpm} songKey={song.songKey} url={song.youtubeUrl} key={nanoid()}/>);

        

    return (
        <div className="chord-charts-containter">
        {ChordCharts}
        </div>
    )
} 

export default ChordChartContainer;