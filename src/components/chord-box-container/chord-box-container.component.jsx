import React, { Component } from 'react';

import ChordBox from '../chord-box/chord-box.component';

class ChordBoxContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            note: props.note,
            key: props.key,
         
        }
        
    }

    _onMouseMove = () => {
        const width = this.refs.chordBox.clientWidth;
        const height = this.refs.chordBox.clientheight;
        console.log(width, height)

    }

    render() {
        
        

        return(
            <ChordBox ref="chordBox" className="chordBox" note={this.state.note} key={this.state.key} onMouseMove={this._onMouseMove}>HIHI</ChordBox>
            
        )
    }

}


export default ChordBoxContainer;