import React, {useState} from 'react';

import ChordBox from '../chord-box/chord-box.component';

import ChordDiagram from '../chord-diagram/chord-diagram.component';

import { nanoid } from 'nanoid';

import './chord-chart.styles.scss';

// const positions = '2x121x';
// const firstFret = '1';
const chordName = 'F#m7♭5'

// const positions2 = 'x5xooo';
// const firstFret2 = '1';
// const chordName2 = 'Em/D';

// const positions3 = '2123xx';
// const firstFret3 = '5';
// const chordName3 = 'B♭7'


const ChordChart = ({chords, title, year}) => {

        const [visible, setVisible] = useState(true);
        
        // const chordBoxes = chords.map(chord =>  <ChordBox note={chord} key={nanoid()} onClick={() => setVisible(!visible)}>{visible && <ChordDiagram positions={positions} firstFret={firstFret} chordName={chordName} />}</ChordBox>    );
        const chordBoxes = chords.map(chord => <ChordBox note={chord} key={nanoid()}  /> );
        const ChordDiagrams = chords.map (chord => chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : null)
        return (
            <div className="chord-chart-single">
            <div className="chord-diagram-container-chart">
            {visible && ChordDiagrams}
            </div>
                <div className='chord-chart-heading'>{title} ({year})</div>
                <div className='chord-chart' onClick={() => setVisible(!visible)}>
                
                {chordBoxes }
                
            
                </div>
            </div>
         
        );
        
        
    
}



export default ChordChart;
