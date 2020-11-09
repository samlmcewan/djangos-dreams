import './chord-diagram.styles.scss';

const ChordDiagram = (positions) => {

    const guitarStrings = ['e6', 'a5', 'd4', 'g3', 'b2', 'e1'];

    const renderedStrings = guitarStrings.map(guitarString => <div className="guitar-string" id={guitarString}></div>);

    const frets = ['fret-1', 'fret-2', 'fret-3', 'fret-4'];

    const renderedFrets = frets.map(fret => <div className="fret" id={fret}></div>);

    const fingerDots = [
        {fret: '1', guitarString: 'e6'},
        {fret: '1', guitarString: 'a5'},
        {fret: '1', guitarString: 'd4'},
        {fret: '1', guitarString: 'g3'},
        {fret: '1', guitarString: 'b2'},
        {fret: '1', guitarString: 'e1'},

        {fret: '2', guitarString: 'e6'},
        {fret: '2', guitarString: 'a5'},
        {fret: '2', guitarString: 'd4'},
        {fret: '2', guitarString: 'g3'},
        {fret: '2', guitarString: 'b2'},
        {fret: '2', guitarString: 'e1'},

        {fret: '3', guitarString: 'e6'},
        {fret: '3', guitarString: 'a5'},
        {fret: '3', guitarString: 'd4'},
        {fret: '3', guitarString: 'g3'},
        {fret: '3', guitarString: 'b2'},
        {fret: '3', guitarString: 'e1'},

        {fret: '4', guitarString: 'e6'},
        {fret: '4', guitarString: 'a5'},
        {fret: '4', guitarString: 'd4'},
        {fret: '4', guitarString: 'g3'},
        {fret: '4', guitarString: 'b2'},
        {fret: '4', guitarString: 'e1'},

        {fret: '5', guitarString: 'e6'},
        {fret: '5', guitarString: 'a5'},
        {fret: '5', guitarString: 'd4'},
        {fret: '5', guitarString: 'g3'},
        {fret: '5', guitarString: 'b2'},
        {fret: '5', guitarString: 'e1'}

    ];

    const renderedFingerDots = fingerDots.map(dot => <div className="dot" id={`${dot.fret}-${dot.guitarString}`}></div>);

    console.log(renderedFingerDots);


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