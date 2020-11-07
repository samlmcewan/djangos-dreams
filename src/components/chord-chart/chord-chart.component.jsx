import ChordBox from '../chord-box/chord-box.component';
import './chord-chart.styles.scss';

const ChordChart = ({chords, title, year}) => {
        
        const chordBoxes = chords.map(chord=> <ChordBox note={chord} key={Math.random()}/>);
        
        return (
            <div className="chord-chart-single">
                <div className='chord-chart-heading'>{title} ({year})</div>
                <div className='chord-chart'>
                {chordBoxes}
                </div>
            </div>
         
        );
        
        
    
}



export default ChordChart;
