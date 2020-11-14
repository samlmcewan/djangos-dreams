import React from 'react';
import './chord-box.styles.scss';

const ChordBox = ({note, onClick}) => {
    // add conditional statement here saying if note is whole box do below, if not make another return statement for trianlge/half boxes
    
    
    // if box split
    if (note.chordName1) { 

        // if box quarter

        if (note.chordTwoShort) {

            if (note.chordName2.length > 3) {
                return (
                    <div className="chord-box-split">
                            <div className='quarter-triangle'></div>
                        <div className="chordbox-quarter">
                            <p className="chord-note half-right long-note" onClick={() => onClick(note.id2)} key={note.id2}><span dangerouslySetInnerHTML={{ __html: note.chordName2 }} /></p>
                        </div>
                        
                            
        
                        <div className="chordbox-Left">
                            <p className="chord-note half-left" onClick={() => onClick(note.id1)} key={note.id1}><span dangerouslySetInnerHTML={{ __html: note.chordName1 }} /></p>
                        </div>
                        
                        
                    </div>
                );

            } else 

            return (
                <div className="chord-box-split">
                        <div className='quarter-triangle'></div>
                    <div className="chordbox-quarter">
                        <p className="chord-note half-right" onClick={() => onClick(note.id2)} key={note.id2}><span dangerouslySetInnerHTML={{ __html: note.chordName2 }} /></p>
                    </div>
                    
                        
    
                    <div className="chordbox-Left">
                        <p className="chord-note half-left" onClick={() => onClick(note.id1)} key={note.id1}><span dangerouslySetInnerHTML={{ __html: note.chordName1 }} /></p>
                    </div>
                    
                    
                </div>
            );

        } 
        // else if split in half
        else {
            

        return (
            <div className="chord-box-split">
                <div className="chordbox-right">
                    <p className="chord-note half-right" onClick={() => onClick(note.id2)} key={note.id2}><span dangerouslySetInnerHTML={{ __html: note.chordName2 }} /></p>
                </div>

                
                
                    <div className="half-line"></div>
                <div className="chordbox-Left">
                    <p className="chord-note half-left" onClick={() => onClick(note.id1)} key={note.id1} ><span dangerouslySetInnerHTML={{ __html: note.chordName1 }} /></p>
                </div>
                
                
            </div>
        );
        }

}
// else if full box
// else if long note name

else if (note.chordName.length > 4) {

    return (
        <div className="chord-box">
            <p className="chord-note long-note" onClick={() => onClick(note.id)} ><span dangerouslySetInnerHTML={{ __html: note.chordName }} /></p>
        </div>
    );

}

// else normal full box 
else {
    
    return (
        <div className="chord-box">
            <p className="chord-note" onClick={() => onClick(note.id)} ><span dangerouslySetInnerHTML={{ __html: note.chordName }} /></p>
        </div>
    );

} };

export default ChordBox;