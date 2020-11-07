import React from 'react';
import './chord-box.styles.scss';

const ChordBox = ({note}) => {
    return (
        <div className="chord-box">
            <p className="chord-note">{note}</p>
        </div>
    );

}

export default ChordBox;