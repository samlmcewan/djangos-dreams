import ChordChart from '../chord-chart/chord-chart.component';
import './chord-chart-container.styles.scss';

const ChordChartContainer = ({songs}) => {
  
    
        const ChordCharts = songs.map(song=> <ChordChart chords={song.chords} title={song.title} year={song.year} key={Math.random()}/>);
    
    return (
        <div className="chord-charts-containter">
        {ChordCharts}
        </div>
    )
} 

export default ChordChartContainer;