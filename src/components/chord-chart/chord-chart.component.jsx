import React, {useState} from 'react';

import ChordBox from '../chord-box/chord-box.component';
import ChordDiagram from '../chord-diagram/chord-diagram.component';

import playIcon from '../../../src/play-arrow.png';

import { nanoid } from 'nanoid';

import ReactPlayer from 'react-player/lazy';

import './chord-chart.styles.scss';

 

const ChordChart = ({chords, title, year, bpm, songKey, url}) => {

   

    

    const [visible, setVisible] = useState(false);
    let [chordDiagramId, setChordId] = useState(null);
    let [chordDiagramId2, setChordId2] = useState(null);

    // const { posx, posy } = useMousePosition();

    // console.log(`mouse position x: ${posx} y: ${posy}`);

    
      
      
    
    

    
    
    const setChordDiagram = (chordId, chordId2) => {
        chordDiagramId = chordId;
        chordDiagramId2 = chordId2;
        setVisible(!visible);
        setChordId(chordDiagramId);
        setChordId2(chordDiagramId2);
    }

    // const [chordId, setChordId] = useState();

    

    // onClick={() => setVisible(!visible)}

        
        const chordBoxes = chords.map(chord => chord.id ? <ChordBox onClick={setChordDiagram} note={chord} key={chord.id}/> : chord.id1 ? <ChordBox onClick={setChordDiagram} note={chord} key={nanoid()} /> : null);

        // make objects from objects with two chords in them in the chords array, assign all chord objects to newChordsArray
        const getWholeChordObjs = (arr) => {
            let newChordsArray = [];
            let chordObj = {chordName: 'name', positions: 'positions', firstFret: 'firstFret', id: 'id'};
            for (let obj of arr) {
                if (obj.chordName1) {
                    const newobj = Object.create(chordObj);
                    const newobj2 = Object.create(chordObj);
                    newobj.chordName = obj['chordName1'];
                    newobj.positions = obj['positions1'];
                    newobj.firstFret = obj['firstFret1'];
                    newobj.id = obj['id1'];
                    
                    newobj2.chordName = obj['chordName2'];
                    newobj2.positions = obj['positions2'];
                    newobj2.firstFret = obj['firstFret2'];
                    newobj2.id = obj['id2'];


                    newChordsArray.push(newobj);
                    newChordsArray.push(newobj2);
                } else newChordsArray.push(obj);
            }
            return newChordsArray;

        }; 
        // console.log(getWholeChordObjs(chords));


        const newChords = getWholeChordObjs(chords);

        


        // const uniqueChords = [...new Set(newChords)];
        

        const chordDiagrams = newChords.map(chord => (visible && chord.positions && (chordDiagramId === chord.id)) ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} id={chord.id} key={nanoid()} isVisible={visible}/> : (visible && chord.positions && (chordDiagramId2 === chord.id)) ? <ChordDiagram positions={chord.positions} firstFret={chord.firstFret} chordName={chord.chordName} id={chord.id} key={nanoid()}/> : null );

        const uniqueChords = chordDiagrams.find(chord => chord);
        console.log(uniqueChords);

        const invisibleDiv = visible && <div className='invisible-div-diagram' onClick={setChordDiagram}></div>;
        

        return (
            <div>
            
            {invisibleDiv}
            <div className="chord-diagram-container-chart" onClick={setChordDiagram}>   
            {uniqueChords}
        
    
            </div>
            <div className="chord-chart-single">
                
                <div className='chord-chart-heading'>{title}</div>
                <div className='song-info-wrapper'>
                <div className='song-info'>
                    <p id='info-1'>Year: {year}</p> 
                    <p>BPM: {bpm}</p>
                    <p id='info-3'>Key: {songKey}</p>
                    </div>
                    <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    // height='inherit'
                    width='100%'
                    height='30%'
                    modestbranding='1'
                    showinfo='0'
                    // controls=true
                    enablejsapi='1'
                    color='#89afe5'
                    light='true'
                    url={url}
                    // playIcon={playIcon}
                    config={{
                    youtube: {
                        playerVars: { showinfo: 0}
                    }
                    }}
                    />
                    
                </div>
                </div>
                
                
                
                <div className='chord-chart'>
                {chordBoxes }
                </div>
                
            </div>
            </div>
         
        );
        
        
    
}



export default ChordChart;