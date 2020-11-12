import './chord-diagram.styles.scss';

import {guitarStrings, frets, stringXOs, fingerDots} from '../../app-data/chord-diagram-data.js';

import { nanoid } from 'nanoid';

const ChordDiagram = (chord) => {

    const fingerPositions = chord.positions;

    const firstFret = chord.firstFret;

    const chordName = chord.chordName;

    // render guitar string lines
    const renderedStrings = guitarStrings.map(guitarString => <div className="guitar-string" id={guitarString} key={nanoid()}></div>);
    // render guitar frets
    const renderedFrets = frets.map(fret => <div className="fret" id={fret} key={nanoid()}></div>);

    const getChordDots = (positions) => {
        // filter out each guitar string from fingerdots array 
        const e6 = fingerDots.filter(dot => dot.guitarString === 'e6');
        const a5 = fingerDots.filter(dot => dot.guitarString === 'a5');
        const d4 = fingerDots.filter(dot => dot.guitarString === 'd4');
        const g3 = fingerDots.filter(dot => dot.guitarString === 'g3');
        const b2 = fingerDots.filter(dot => dot.guitarString === 'b2');
        const e1 = fingerDots.filter(dot => dot.guitarString === 'e1');
               
        // filter through dots that match position fret and push to new array chordDots
        let chordDots = [];

        const chordDotE6 = e6.filter(gfret => gfret.fret === positions[0]);
        const chordDotA5 = a5.filter(gfret => gfret.fret === positions[1]);
        const chordDotD4 = d4.filter(gfret => gfret.fret === positions[2]);
        const chordDotG3 = g3.filter(gfret => gfret.fret === positions[3]);
        const chordDotB2 = b2.filter(gfret => gfret.fret === positions[4]);
        const chordDotE1 = e1.filter(gfret => gfret.fret === positions[5]);

        chordDots.push(chordDotE6, chordDotA5, chordDotD4, chordDotG3, chordDotB2, chordDotE1);

        // console.log(chordDots[0][0].strFret);

        // get strFret value from chordDots array and push to new array chorDotsStrFret
        const chordDotsStrFret = [];
        for(let item of chordDots){
            for (let itemb of item) {
                chordDotsStrFret.push(itemb.strFret);
            }
        }

        // assign visible values to dots in fingerDots that match the value of the strFret value in chordDotsStrFret array 
        const selectedFingerDots = fingerDots.map((o) => chordDotsStrFret.includes(o.strFret) ? Object.assign({}, o, {isVisible: 'visible'}) : o);

        // map selectedFingerDots and conditionally render visible class
        const renderedFingerDots = selectedFingerDots.map(dot => 
            { return dot.isVisible === "visible" ? <div className={`dot ${dot.guitarString} visible`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div> : <div className={`dot ${dot.guitarString}`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div>})

             return renderedFingerDots;
        }

    const getXos = (positions) => { 

        // assign position values to xo key value 
        const e6 = stringXOs[0];
        const a5 = stringXOs[1]; // {str: "a5", xo: "x"}
        const d4 = stringXOs[2];
        const g3 = stringXOs[3];
        const b2 = stringXOs[4];
        const e1 = stringXOs[5];

        e6.xo = positions[0];
        a5.xo = positions[1];
        d4.xo = positions[2];
        g3.xo = positions[3];
        b2.xo = positions[4];
        e1.xo = positions[5];

        // map over stringXOs array xo values and conditionally render X or O or nothing 
        return stringXOs.map((o) => o.xo === 'x' || o.xo === 'o' ? <div className='string-char' id={`${o.str}xo`} key={nanoid()}>{o.xo}</div> : <div className='string-char hidden' id={`${o.str}xo`} key={nanoid()}>x</div> )
        };

    const renderedFingerDots = getChordDots(fingerPositions);

    const renderedStringXOs = getXos(fingerPositions);

    return (
        <div className="chord-diagram-container">
            <div className="fret-title"><em>Fret</em></div>
            <div className="first-fret-number"><em>{firstFret}</em></div>
            <div className="chord-name"><span dangerouslySetInnerHTML={{ __html: chordName }} /></div>
            <div className="string-x-o-container">
            {renderedStringXOs}
            </div>
                <div className="chord-diagram-box">
                    <div className="finger-dots">
                    {renderedFingerDots}
                    </div>
                    <div className="fret-box">
                    {renderedFrets}
                    </div>
                    {renderedStrings}
                </div>
            </div>
    );
}

export default ChordDiagram;