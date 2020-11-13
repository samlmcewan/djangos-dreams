import React, {useState} from 'react';

import ChordBox from '../chord-box/chord-box.component';

import ChordDiagram from '../chord-diagram/chord-diagram.component';

import { nanoid } from 'nanoid';

import './chord-chart.styles.scss';

// const positions = '2x121x';
// const firstFret = '1';
// const chordName = 'F#m7♭5'

// const positions2 = 'x5xooo';
// const firstFret2 = '1';
// const chordName2 = 'Em/D';

// const positions3 = '2123xx';
// const firstFret3 = '5';
// const chordName3 = 'B♭7'


const ChordChart = ({chords, title, year}) => {

        const [visible, setVisible] = useState(false);
        
        // const chordBoxes = chords.map(chord =>  <ChordBox note={chord} key={nanoid()} onClick={() => setVisible(!visible)}>{visible && <ChordDiagram positions={positions} firstFret={firstFret} chordName={chordName} />}</ChordBox>    );
        const chordBoxes = chords.map(chord => <ChordBox note={chord} key={nanoid()}  /> );
        // const ChordDiagrams = chords.map(chord => chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : null );
       

       
       
       
        // const ChordDiagrams = chords.map(chord => 
        //     { if(chord.positions) {
        //         return <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/>
        //     }  else if (chord.chordOne.positions) {
        //         return <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/>
        //     } else return null} );






        // make objects from objects with two chords in them in the chords array 
        const getWholeChordObjs = (arr) => {
            let newChordsArray = [];
            let chordObj = {chordName: 'name', positions: 'positions', firstFret: 'firstFret'};
            for (let obj of arr) {
                if (obj.chordName1) {
                    const newobj = Object.create(chordObj);
                    const newobj2 = Object.create(chordObj);
                    newobj.chordName = obj['chordName1'];
                    newobj.positions = obj['positions1'];
                    newobj.firstFret = obj['firstFret1'];
                    
                    newobj2.chordName = obj['chordName2'];
                    newobj2.positions = obj['positions2'];
                    newobj2.firstFret = obj['firstFret2'];


                    newChordsArray.push(newobj);
                    newChordsArray.push(newobj2);
                } else newChordsArray.push(obj);
            }
            return newChordsArray;

        }; console.log(getWholeChordObjs(chords));

        const newChords = getWholeChordObjs(chords);

        const ChordDiagrams = newChords.map(chord => chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : null );


        // const ChordDiagrams = chords.map(chord => chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : chord.chordOne ? <ChordDiagram positions={chord.chordOne.positions} firstFret={chord.chordOne.firstFret} chordName={chord.chordOne.chordName} key={nanoid()}/> : chord.chordTwo ? <ChordDiagram positions={chord.chordTwo.positions} firstFret={chord.chordTwo.firstFret} chordName={chord.chordTwo.chordName} key={nanoid()}/> : chord.chordTwoShort ? <ChordDiagram positions={chord.chordTwoShort.positions} firstFret={chord.chordTwoShort.firstFret} chordName={chord.chordTwoShort.chordName} key={nanoid()}/> : null);
        
       


        // const ChordDiagrams = chords.map(chord => {
        //     if (chord.positions) {
        //         return <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/>
        //     } 
        //     if (chord[0] === 'chordOne') {
        //         return <ChordDiagram positions={chord[0].positions} firstFret={chord[0].firstFret} chordName={chord[0].chordName} key={nanoid()}/>
        //     }
        //     if (chord[1] === 'chordTwo') {
        //         return <ChordDiagram positions={chord[1].positions} firstFret={chord[1].firstFret} chordName={chord[1].chordName} key={nanoid()}/>
        //     }
        //     if (chord[1] === 'chordTwoShort') {
        //         return <ChordDiagram positions={chord[1].positions} firstFret={chord[1].firstFret} chordName={chord[1].chordName} key={nanoid()}/>
        //     }
            
            
        //     else return null;
        // })
        
        // then iterate through chordiagrams on objects rturned null and make good?
  
        // data.items[1].name this could be it!!!!   <<<<<<<<<<<<<<<<
        
    //   console.dir(chords);
    // console.log(JSON.stringify(chords));
    //   console.log(chords.map (chord => chord.chordOne))
        
    // hasOwnProperty("key")

       
        // const ChordDiagrams =  chords.map(chord => chord.positions ?  <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : null)
    //    console.dir(chords)
       
        // const ChordDiagrams = chords.map(chord => <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName}/>)

            

            // let positions = chord.positions && chord.chordOne.positions && chord.chordTwo.positions && chord.chordTwoShort.positions;
            // let firstFret = chord.firstFret && chord.chordOne.firstFret && chord.chordTwo.firstFret && chord.chordTwoShort.positions;
            // let chordName = chord.chordName && chord.chordOne.chordName && chord.chordTwo.chordName && chord.chordTwoShort.chordName;
            //  return <ChordDiagram positions={positions} firstFret={firstFret} chordName={chordName} key={nanoid()}/>
            // if(chord.chordOne)
            
            //     return <ChordDiagram positions={chord.chordOne['positions']} firstFret={chord.chordOne['firstFret']} chordName={chord.chordOne['chordName']} key={nanoid()}/>
            // if (chord.chordTwo) 
            // return <ChordDiagram positions={chord.chordTwo['positions']} firstFret={chord.chordTwo['firstFret']} chordName={chord.chordTwo['chordName']} key={nanoid()}/>
            // if (chord.chordTwoShort)
            // return <ChordDiagram positions={chord.chordTwoShort['positions']} firstFret={chord.chordTwoShort['firstFret']} chordName={chord.chordTwoShort['chordName']} key={nanoid()}/>
            // return <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/>
         
        
        
        
        // const ChordDiagrams = chords.map(chord => chord.length === 2 ? <ChordDiagram positions={chord.chordTwoShort.positions} firstFret={chord.chordTwoShort.firstFret} chordName={chord.chordTwoShort.chordName} key={nanoid()}/> : null)
        // )
        
        
        
        // const ChordDiagrams = chords.map(chord => chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : chord.chordOne ? <ChordDiagram positions={chord.chordOne.positions} firstFret={chord.chordOne.firstFret} chordName={chord.chordOne.chordName} key={nanoid()}/> : chord.chordTwo ? <ChordDiagram positions={chord.chordTwo.positions} firstFret={chord.chordTwo.firstFret} chordName={chord.chordTwo.chordName} key={nanoid()}/> : chord.chordTwoShort ? <ChordDiagram positions={chord.chordTwoShort.positions} firstFret={chord.chordTwoShort.firstFret} chordName={chord.chordTwoShort.chordName} key={nanoid()}/>)



        // cond1? ifTrue1 : cond2? if True2 : ifFalse2;
        // const chordFullBoxDiagrams = chords.map(chord => chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : null);
        // const chordChordOneDiagrams = chords.map(chord => chord.chordOne ? <ChordDiagram positions={chord.chordOne.positions} firstFret={chord.chordOne.firstFret} chordName={chord.chordOne.chordName} key={nanoid()}/> : null);
        // const chordChordTwoDiagrams = chords.map(chord => chord.chordTwo ? <ChordDiagram positions={chord.chordTwo.positions} firstFret={chord.chordTwo.firstFret} chordName={chord.chordTwo.chordName} key={nanoid()}/> : null);
        // const chordChordTwoShortDiagrams = chords.map(chord => chord.chordTwoShort ? <ChordDiagram positions={chord.chordTwoShort.positions} firstFret={chord.chordTwoShort.firstFret} chordName={chord.chordTwoShort.chordName} key={nanoid()}/> : null);


            // chord.positions ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} key={nanoid()}/> : null)


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
