import ChordBox from '../chord-box/chord-box.component'


import './legend.styles.scss';

const Legend = () => {
    const exampleFullBox = {
        chordName: 'C'
    }

    const exampleHalfBox = {
        chordName1: 'C',
        chordName2: 'Cm'
    }

    const exampleQuarterBox = {
        chordName1: 'C',
        chordName2: 'Cm',
        chordTwoShort: true
    }
    return (
        <div className='legend-container'>
            <div className='legend-item'>Click on a chord to display its diagram</div>
            <div className='legend-item'><ChordBox note={exampleFullBox}/> Each full box is worth 4 beats </div>
            <div className='legend-item'><ChordBox note={exampleHalfBox}/> Each chord in a split box is worth 2 beats</div>
            <div className='legend-item'><ChordBox note={exampleQuarterBox}/> In a quarter box the first chord is worth 3 beats and the second worth 1 beat</div>
            <div className='legend-item'>% Play the previous chord again</div>
            
            
            
            
        </div>
    );
}

export default Legend;