import React from 'react';
import './chord-box.styles.scss';

const ChordBox = ({note}) => {
    // add conditional statement here saying if note is whole box do below, if not make another return statement for trianlge/half boxes
    if (typeof note === 'object') { 

        return (
            // <div className="chord-box">
            //     <div className="chord-box-half-one">
            //         <p className="chord-note">{note.chordOne}</p>
            //     </div>
            //     <div className="chord-box-half-two">
            //         <p className="chord-note">{note.chordTwo}</p>
            //     </div>
            // </div>
            <div className="chord-box-split">

                <div className="chordbox-Left">
                    <p className="chord-note half-left"><div dangerouslySetInnerHTML={{ __html: note.chordOne }} /></p>
                </div>
                
                    <div className="half-line"></div>

                <div className="chordbox-right">
                    <p className="chord-note half-right"><div dangerouslySetInnerHTML={{ __html: note.chordTwo }} /></p>
                </div>
                
            </div>
        );

}
else {
    
    return (
        <div className="chord-box">
            <p className="chord-note"><div dangerouslySetInnerHTML={{ __html: note }} /></p>
        </div>
    );

} };

export default ChordBox;