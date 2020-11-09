import './chord-diagram.styles.scss';

const ChordDiagram = (positions) => {

    const guitarStrings = ['e6', 'a5', 'd4', 'g3', 'b2', 'e1'];

    const renderedStrings = guitarStrings.map(guitarString => <div className="guitar-string" id={guitarString}></div>);

    const frets = ['fret-1', 'fret-2', 'fret-3', 'fret-4'];

    const renderedFrets = frets.map(fret => <div className="fret" id={fret}></div>);


    return (
        <div className="chord-diagram-container">
            <div className="chord-diagram-box">
                
                <div className="fret-box">
                {renderedFrets}
                </div>
                {renderedStrings}
             
            </div>
            
                
        </div>
    );


}

export default ChordDiagram;