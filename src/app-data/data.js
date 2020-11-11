const SongData = [
    {   
        title: "After You've Gone",
        year: 1936,
        chords: [{chord: 'C', positions: 'x13331', firstFret: '3', chordName: 'C'}, {chord: '%'}, {chord: 'Cm', positions: 'x13321', firstFret: '', chordName: 'Cm'}, {chord: '%'}, {chord: 'G'}, {chord: '%'}, {chord: 'E7'}, {chord: '%'}, {chord: 'A7'}, {chord: '%'}, {chord: 'D7'}, {chord: '%'}, {chord: 'G'}, {chord: '%'}, {chord: 'G7'}, {chord: '%'}, {chord: 'C'}, {chord: '%'}, {chord: 'Cm'}, {chord: '%'}, {chord:'G'}, {chord: '%'}, {chord: 'E7'}, {chord: '%'}, {chord: 'Am'}, {chord: 'E7'}, {chord: 'Am'}, {chord: 'Cm'}, {chord: 'G'}, {chord: 'B7'}, {chord:'Em'}, {chord: 'E<sup>o</sup>'}, {chord: 'G'}, {chord: '%'}, {chord: 'Am7'}, {chord: 'D7'}, {chord: 'G'}, {chord: '%'}, {chord: '%'}, {chord: 'G7'}]
    },
    {   
        title: "Nagasaki",
        year: 1936,
        chords: [{chordOne: {chord: 'C', positions: 'x13331', firstFret: '3', chordName: 'C'}, chordTwo: {chord: 'C#<sup>o</sup>', positions: 'x13331', firstFret: '4', chordName: 'C#<sup>o</sup>'}}, 'G7/D', {chordOne: 'C', chordTwo: 'C#<sup>o</sup>'}, 'G7/B', {chordOne: 'C', chordTwo: 'E7'}, {chordOne:'F', chordTwo:'Fm'}, {chordOne: 'C', chordTwo:'G7'}, 'C', {chordOne: 'C', chordTwo: 'C#<sup>o</sup>'}, 'G7/D', {chordOne: 'C', chordTwo: 'C#<sup>o</sup>'}, 'G7/B', {chordOne: 'C', chordTwo: 'E7'}, {chordOne:'F', chordTwo:'Fm'}, {chordOne: 'C', chordTwo:'G7'}, 'C', 'F', 'Fm', 'C', 'C7', 'F', 'Fm', {chordOne: 'C', chordTwo: 'Am'}, {chordOne: 'D7', chordTwo:'G7'}, {chordOne: 'C', chordTwo: 'C#<sup>o</sup>'}, 'G7/D', {chordOne: 'C', chordTwo: 'C#<sup>o</sup>'}, 'G7/B', {chordOne: 'C', chordTwo: 'E7'}, {chordOne:'F', chordTwo:'Fm'}, {chordOne: 'C', chordTwo:'G7'}, 'C']
    },
    {   
        title: "Coucou",
        year: 1936,
        chords: ['C', '%', 'Am', '%', 'F', 'G7', {chordOne: 'C', chordTwo: 'Am7'}, {chordOne: 'Dm7', chordTwo: 'G7'}, 'C', '%', 'Am', '%', 'F', 'G7', 'C', '%', 'C7', '%', 'F', '%', 'D7', '%', 'G7', '%', 'C', '%', 'Am', '%', 'F', 'G7', 'C', '(G7)']
    },
    {   
        title: "Melodie Au Crepuscule (Twilights Melody)",
        year: 1936,
        chords: [{chordOne: 'Em', chordTwo: 'Em7'}, 'A7', 'D', '%', 'E9', '%', 'E♭9', 'A7', {chordOne: 'Em', chordTwo: 'Em7'}, {chordOne: 'A/C#', chordTwo: 'A7#5'}, 'D', {chordOne: 'D', chordTwo: 'Bm'}, 'Em', {chordOne: 'E♭9', chordTwo: 'A7#5'}, 'D <sup>6/9</sub>', '-', {chordOne: 'Em', chordTwo: 'Em7'}, {chordOne: 'A/C#', chordTwo: 'A7#5'}, {chordOne: 'D', chordTwo: 'Gm6'}, {chordOne: 'D', chordTwo: 'C#9'}, {chordOne: 'F#', chordTwo: 'D#m'}, {chordOne: 'G#m7', chordTwo: 'C#9'}, {chordOne: 'F#6', chordTwo: 'C#9'}, {chordOne: 'F#', chordTwo: 'F#<sup>o</sup>'}, {chordOne: 'Em', chordTwoShort: 'C#7'}, {chordOne: 'C7/G', chordTwo: 'F#<sup>o</sup>'}, 'Em', {chordOne: 'F#7', chordTwo: 'F7'}, 'Bm', 'Gm6', 'A7', '-', 'Em', 'A7', 'F#m7♭5', 'F#<sup>o</sup>', 'Em', {chordOne: 'E7', chordTwo: 'A7'}, {chordOne: 'D', chordTwoShort: 'A7'}, 'D']
    },
    {   
        title: "Georgia On My Mind",
        year: 1936,
        chords: ['E♭', 'G7', 'Cm', {chordOne: 'A♭', chordTwo: 'A♭m'}, {chordOne: 'E♭', chordTwo: 'F#<sup>o</sup>'}, {chordOne: 'Fm', chordTwo: 'B♭7'}, {chordOne: 'E♭', chordTwo: 'E<sup>o</sup>'}, {chordOne: 'Fm', chordTwo: 'B♭7'}, 'E♭', 'G7', 'Cm', {chordOne: 'A♭', chordTwo: 'A♭m'}, {chordOne: 'E♭', chordTwo: 'F#<sup>o</sup>'}, {chordOne: 'Fm', chordTwo: 'B♭7'}, {chordOne: 'E♭', chordTwo: 'A♭m'}, {chordOne: 'E♭', chordTwo: 'G7'}, 'Cm', {chordOne: '%', chordTwo: 'G7'}, 'Cm', {chordOne: '%', chordTwo: 'F'}, 'Cm', {chordOne: '%', chordTwo: 'D7'}, {chordOne: 'Gm', chordTwo: 'G♭<sup>o</sup>'}, {chordOne: 'Fm', chordTwo: 'B♭7'}, 'E♭', 'G7', 'Cm', {chordOne: 'A♭', chordTwo: 'A♭m'}, {chordOne: 'E♭', chordTwo: 'F#<sup>o</sup>'}, {chordOne: 'Fm', chordTwo: 'B♭7'}, {chordOne: 'E♭', chordTwo: 'A♭m'}, 'E♭']
    },
    {   
        title: "I Can't Give You Anything But Love",
        year: 1936,
        chords: ['G', {chordOne: 'G/B', chordTwo: 'B♭<sup>o</sup>'}, 'Am7', 'D7', 'G', {chordOne: 'G/B', chordTwo: 'B♭<sup>o</sup>'}, 'Am7', 'D7', 'G7', '%', 'C', '%', 'A7', '%', 'D7', '%', 'G', {chordOne: 'G/B', chordTwo: 'B♭<sup>o</sup>'}, 'Am7', 'D7', 'G7', '%', 'C', '%', 'C', 'C#<sup>o</sup>', 'G/D', 'E7', 'Am7', 'D7', {chordOne: 'G', chordTwo: 'E7'}, {chordOne: 'Am7', chordTwo: 'D7'}]
    },
   

];

export default SongData;