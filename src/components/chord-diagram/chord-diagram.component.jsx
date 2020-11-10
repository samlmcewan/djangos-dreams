import './chord-diagram.styles.scss';

import {guitarStrings, frets, stringXOs, fingerDots} from '../../mock-data/chord-diagram-data.js';

import { nanoid } from 'nanoid';

const ChordDiagram = () => {

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
        console.log(selectedFingerDots);

        // map selectedFingerDots and conditionally render visible class
        const renderedFingerDots = selectedFingerDots.map(dot => 
            { return dot.isVisible === "visible" ? <div className={`dot ${dot.guitarString} visible`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div> : <div className={`dot ${dot.guitarString}`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div>})

             return renderedFingerDots;
        }

        let renderedFingerDots = getChordDots('2x12ox');


    const getXos = (positions) => { 
        
           return stringXOs.map(stringChar => <div className='string-char' id={`${stringChar.str}xo`} key={nanoid()}>{stringChar.xo}</div>)  
        }
    ;
    const renderedStringXOs = getXos('2x12ox');
   

    return (
        <div className="chord-diagram-container">
            <div className="fret-title"><em>Fret</em></div>
            <div className="first-fret-number"><em>5</em></div>
            <div className="chord-name">F#m7♭5</div>
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