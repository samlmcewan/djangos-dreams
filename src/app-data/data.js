import { nanoid } from 'nanoid';


const SongData = [
    {   
        title: "After You've Gone",
        year: 1936,
        chords: [
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'Cm', positions: 'x13321', firstFret: '3', id: 'Cm3', id: nanoid()}, 
            {chordName: '%', id: nanoid()},
            {chordName: 'G', positions: '133211', firstFret: '3', id: 'G3', id: nanoid()},
            {chordName: '%', id: nanoid()},
            {chordName: 'E7', positions: 'x3231xx', firstFret: '5', id: 'E75', id: nanoid()},
            {chordName: '%', id: nanoid()}, 
            {chordName: 'A7', positions: '2123xx', firstFret: '4', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'D7', positions: 'x13131', firstFret: '5', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'G', positions: '133211', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'G7', positions: '2123xx', firstFret: '2', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'Cm', positions: 'x13321', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName:'G', positions: '133211', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'E7', positions: 'x3231xx', firstFret: '5', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'Am', positions: '133111', firstFret: '5', id: nanoid()}, 
            {chordName: 'E7', positions: 'x3231xx', firstFret: '5', id: nanoid()}, 
            {chordName: 'Am', positions: '133111', firstFret: '5', id: nanoid()}, 
            {chordName: 'Cm', positions: 'x13321', firstFret: '3', id: nanoid()}, 
            {chordName: 'G', positions: '133211', firstFret: '3', id: nanoid()}, 
            {chordName: 'B7', positions: '2123xx', firstFret: '6', id: nanoid()}, 
            {chordName:'Em', positions: 'x13321', firstFret: '7', id: nanoid()}, 
            {chordName: 'E<sup>o</sup>', positions: 'xx1212', id: nanoid()}, 
            {chordName: 'G', positions: '133211', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'Am7', positions: '1x111x', firstFret: '5', id: nanoid()}, 
            {chordName: 'D7', positions: 'x13131', firstFret: '5', id: nanoid()}, 
            {chordName: 'G', positions: '133211', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'G7', positions: '2123xx', firstFret: '2', id: nanoid()}
        ]
    },
    // {   
    //     title: "Nagasaki",
    //     year: 1936,
    //     chords: [
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'C#<sup>o</sup>', positions2: 'x13331', firstFret2: '4'},
    //     {chordName: 'G7/D', positions: 'x31211', firstFret: '3'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'C#<sup>o</sup>', positions2: 'x13331', firstFret2: '4'},
    //     {chordName: 'G7/D', positions: 'x31211', firstFret: '3'},
    //     {chordName1: 'C', position1s: 'x13331', firstFret1: '3', chordName2: 'E7', positions2: 'x3231xx', firstFret2: '5'},
    //     {chordName1: 'F', positions1: '133211', firstFret1: '1', chordName2: 'Fm', positions2: '133111', firstFret2: '1'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'G7', positions2: '2123xx', firstFret2: '2'},
    //     {chordName: 'C', positions: 'x13331', firstFret: '3'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'C#<sup>o</sup>', positions2: 'x13331', firstFret2: '4'},
    //     {chordName: 'G7/D', positions: 'x31211', firstFret: '3'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'C#<sup>o</sup>', positions2: 'x13331', firstFret2: '4'},
    //     {chordName: 'G7/D', positions: 'x31211', firstFret: '3'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'E7', positions2: 'x3231xx', firstFret2: '5'},
    //     {chordName1: 'F', positions1: '133211', firstFret1: '1', chordName2: 'Fm', positions2: '133111', firstFret2: '1'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'G7', positions2: '2123xx', firstFret2: '2'},
    //     {chordName: 'C', positions: 'x13331', firstFret: '3'}, 
    //     {chordName: 'F', positions: '133211', firstFret: '1'}, 
    //     {chordName: 'Fm', positions: '133111', firstFret: '1'}, 
    //     {chordName: 'C', positions: 'x13331', firstFret: '3'}, 
    //     {chordName: 'C7', positions: 'x13131', firstFret: '3'}, 
    //     {chordName: 'F', positions: '133211', firstFret: '1'}, 
    //     {chordName: 'Fm', positions: '133111', firstFret: '1'}, 
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'Am', positions2: 'xo221o', firstFret2: '1'}, 
    //     {chordName1: 'D7', positions1: 'x13131', firstFret1: '5', chordName2: 'G7', positions2: '2123xx', firstFret2: '2'}, 
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'C#<sup>o</sup>', positions2: 'x13331', firstFret2: '4'}, 
    //     {chordName: 'G7/D', positions: 'x31211', firstFret: '3'}, 
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'C#<sup>o</sup>', positions2: 'x13331', firstFret2: '4'}, 
    //     {chordName: 'G7/D', positions: 'x31211', firstFret: '3'}, 
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'E7', positions2: 'x3231xx', firstFret2: '5'},
    //     {chordName1: 'F', positions1: '133211', firstFret1: '1', chordName2: 'Fm', positions2: '133111', firstFret2: '1'},
    //     {chordName1: 'C', positions1: 'x13331', firstFret1: '3', chordName2: 'G7', positions2: '2123xx', firstFret2: '2'},
    //     {chordName: 'C', positions: 'x13331', firstFret: '3'}]
    // },
    
    {   
        title: "Coucou",
        year: 1936,
        chords: [
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()},
            {chordName: '%', id: nanoid()},
            {chordName: 'Am', positions: '133111', firstFret: '5', id: nanoid()},
            {chordName: '%', id: nanoid()}, 
            {chordName: 'F', positions: '133211', firstFret: '1', id: nanoid()}, 
            {chordName: 'G7', positions: '2123xx', firstFret: '2', id: nanoid()}, 
            {chordName1: 'C', positions1: 'x13331', firstFret1: '3', id1: nanoid(), chordName2: 'Am7', positions2: '1x111x', firstFret2: '5', id2: nanoid()}, 
            {chordName1: 'Dm7', positions1: 'x13121', firstFret1: '5', id1: nanoid(), chordName2: 'G7', positions2: '2123xx', firstFret2: '2', id2: nanoid()}, 
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'Am', positions: '133111', firstFret: '5', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'F', positions: '133211', firstFret: '1', id: nanoid()}, 
            {chordName: 'G7', positions: '2123xx', firstFret: '2', id: nanoid()}, 
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'C7', positions: 'x13131', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'F', positions: '133211', firstFret: '1', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'D7', positions: 'x13131', firstFret: '5', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'G7', positions: '2123xx', firstFret: '2', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'Am', positions: '133111', firstFret: '5', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'F', positions: '133211', firstFret: '1', id: nanoid()}, 
            {chordName: 'G7', positions: '2123xx', firstFret: '2', id: nanoid()}, 
            {chordName: 'C', positions: 'x13331', firstFret: '3', id: nanoid()}, 
            {chordName: '(G7)', positions: '2123xx', firstFret: '2', id: nanoid()}]
    },
    {   
        title: "Melodie Au Crepuscule (Twilights Melody)",
        year: 1936,
        chords: [
            {chordName1: 'Em', positions1: 'x13321', firstFret1: '7', id1: nanoid(), chordName2: 'Em7', positions2: 'x131211', firstFret2: '7', id2: nanoid()}, 
            {chordName: 'A7', positions: '2123xx', firstFret: '4', id: nanoid()}, 
            {chordName: 'D', positions: 'x13331', firstFret: '5', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'E9', positions: 'x212xx', firstFret: '6', id: nanoid()}, 
            {chordName: '%', id: nanoid()}, 
            {chordName: 'E♭9', positions: 'x212xx', firstFret: '5', id: nanoid()}, 
            {chordName: 'A7', positions: '2123xx', firstFret: '4', id: nanoid()}, 
            {chordName1: 'Em', positions1: 'x13321', firstFret1: '7', id1: nanoid(), chordName2: 'Em7', positions2: 'x131211', firstFret2: '7', id2: nanoid()}, 
            {chordName1: 'A/C#', positions1: 'x1432x', firstFret1: '4', id1: nanoid(), chordName2: 'A7#5', positions2: 'xx122x', firstFret2: '5', id2: nanoid()}, 
            {chordName: 'D', positions: 'x13331', firstFret: '5', id: nanoid()}, 
            {chordName1: 'D', positions1: 'x13331', firstFret1: '5', id1: nanoid(), chordName2: 'Bm7', positions2: '1x111x', firstFret2: '7', id2: nanoid()}, 
            {chordName: 'Em', positions: 'x3134x', firstFret: '5', id: nanoid()}, 
            {chordName1: 'E♭9', positions1: 'x212xx', firstFret1: '5', id1: nanoid(), chordName2: 'A7#5', positions2: 'xx122x', firstFret2: '5', id2: nanoid()}, 
            {chordName: 'D <sup>6/9</sub>', positions: '221122', firstFret: '4', id: nanoid()}, 
            {chordName: '-', id: nanoid()}, 
            {chordName1: 'Em', positions1: 'x13321', firstFret1: '7', id1: nanoid(), chordName2: 'Em7', positions2: 'x131211', firstFret2: '7', id2: nanoid()}, 
            {chordName1: 'A/C#', positions1: 'x1432x', firstFret1: '4', id1: nanoid(), chordName2: 'A7#5', positions2: 'xx122x', firstFret2: '5', id2: nanoid()}, 
            {chordName1: 'D', positions1: 'x13331', firstFret1: '5', id1: nanoid(), chordName2: 'Gm6', positions2: 'xx313x', firstFret2: '3', id2: nanoid()}, 
            {chordName1: 'D', positions1: 'x13331', firstFret1: '5', id1: nanoid(), chordName2: 'C#9', positions2: 'x2122x', firstFret2: '3', id2: nanoid()}, 
            {chordName1: 'F#', positions1: '133211', firstFret1: '2', id1: nanoid(), chordName2: 'D#m', positions2: 'xx212x', firstFret2: '3', id2: nanoid()}, 
            {chordName1: 'G#m7', positions1: '1x111x', firstFret1: '4', id1: nanoid(), chordName2: 'C#9', positions2: 'x2122x', firstFret2: '3', id2: nanoid()}, 
            {chordName1: 'F#6', positions1: 'xx2122', firstFret1: '3', id1: nanoid(), chordName2: 'C#9', positions2: 'x2122x', firstFret2: '3', id2: nanoid()}, 
            {chordName1: 'F#', positions1: '133211', firstFret1: '2', id1: nanoid(), chordName2: 'B7♭9', positions2: '2x121x', firstFret2: '1', id2: nanoid()}, 
            {chordName1: 'Em', positions1: 'o22ooo', firstFret1: '1', id1: nanoid(), chordName2: 'C<sup>#</sup>7/G<sup>#</sup>', positions2: '2x12xx', firstFret2: '3', id2: nanoid(), chordTwoShort: true}, 
            {chordName1: 'C7/G', positions1: '2x12xx', firstFret1: '2', id1: nanoid(), chordName2: 'B7♭9', positions2: '2x121x', firstFret2: '1', id2: nanoid()}, 
            {chordName1: 'Em', positions1: 'o22ooo', firstFret1: '1', id1: nanoid(), chordName2: 'F#7', positions2: '2123xx', firstFret2: '2', id2: nanoid(), chordTwoShort: true}, 
            {chordName: 'F7', positions: '2123xx', firstFret: '1', id: nanoid()}, 
            {chordName: 'Bm', positions: 'x13321', firstFret: '2', id: nanoid()}, 
            {chordName: 'Gm6', positions2: 'xx313x', firstFret2: '3', id: nanoid()}, 
            {chordName: 'A7', positions: '2123xx', firstFret: '4', id: nanoid()}, 
            {chordName: '-', id: nanoid()}, 
            {chordName1: 'Em', positions1: 'x13321', firstFret1: '7', id1: nanoid(), chordName2: 'Em7', positions2: 'x131211', firstFret2: '7', id2: nanoid()}, 
            {chordName: 'A7', positions: '2123xx', firstFret: '4', id: nanoid()},  
            {chordName: 'F#m7♭5', positions: 'xo2212', firstFret: '1', id: nanoid()}, 
            {chordName: 'B7♭9', positions: '2x121x', firstFret: '1', id: nanoid()}, 
            {chordName: 'Em', positions: 'o22ooo', firstFret: '1', id: nanoid()}, 
            {chordName1: 'E7', positions1: 'o2o1oo', firstFret1: '1', id1: nanoid(), chordName2: 'A7', positions2: 'xo2o2o', firstFret2: '1', id2: nanoid()}, 
            {chordName1: 'D', positions1: 'xxo232', firstFret1: '1', id1: nanoid(), chordName2: 'A7', positions2: 'xo2o2o', firstFret2: '1', id2: nanoid(), chordTwoShort: true}, 
            {chordName: 'D', positions: 'xxo232', firstFret: '1', id: nanoid()}
        ]
    },
    // {   
    //     title: "Georgia On My Mind",
    //     year: 1936,
    //     chords: [
    //         {chordName: 'E♭', positions: 'x13331', firstFret: '6'}, 
    //         {chordName: 'G7', positions: '2123xx', firstFret: '2'}, 
    //         {chordName: 'Cm', positions: 'x13321', firstFret: '3'}, 
    //         {chordName1: 'A♭', positions1: '133211', firstFret1: '4', chordName2: 'A♭m', positions2: '133211', firstFret2: '4'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'F#<sup>o</sup>', positions2: 'x2414x'}, 
    //         {chordName1: 'Fm', positions1: 'x13321', firstFret1: '7', chordName2: 'B♭7', positions2: '2123xx', firstFret2: '5'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'E<sup>o</sup>', positions2: 'x1212', firstFret2: '7'}, 
    //         {chordName1: 'Fm', positions1: 'x13321', firstFret1: '7', chordName2: 'B♭7', positions2: '2123xx', firstFret2: '5'}, 
    //         {chordName: 'E♭', positions: 'x13331', firstFret: '6'}, 
    //         {chordName: 'G7', positions: '2123xx', firstFret: '2'}, 
    //         {chordName: 'Cm', positions: 'x13321', firstFret: '3'}, 
    //         {chordName1: 'A♭', positions1: '133211', firstFret1: '4', chordName2: 'A♭m', positions2: '133211', firstFret2: '4'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'F#<sup>o</sup>', positions2: 'x2414x'}, 
    //         {chordName1: 'Fm', positions1: 'x13321', firstFret1: '7', chordName2: 'B♭7', positions2: '2123xx', firstFret2: '5'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'A♭m', positions2: '133211', firstFret2: '4'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'G7', positions2: '2123xx', firstFret2: '2'}, 
    //         {chordName: 'Cm', positions: 'x13321', firstFret: '3'}, 
    //         {chordName1: '%', chordName2: 'G7', positions2: '2123xx', firstFret2: '2'}, 
    //         {chordName: 'Cm', positions: 'x13321', firstFret: '3'}, 
    //         {chordName1: '%', chordName2: 'F', positions2: '133211', firstFret2: '1'}, 
    //         {chordName: 'Cm', positions: 'x13321', firstFret: '3'}, 
    //         {chordName1: '%', chordName2: 'D7', positions2: 'x13131', firstFret2: '5'}, 
    //         {chordName1: 'Gm', positions1: '133211', firstFret1: '3', chordName2: 'G♭<sup>o</sup>', positions2: 'x3121x', firstFret2: '1'}, 
    //         {chordName1: 'Fm', positions1: 'x13321', firstFret1: '7', chordName2: 'B♭7', positions2: '2123xx', firstFret2: '5'}, 
    //         {chordName: 'E♭', positions: 'x13331', firstFret: '6'}, 
    //         {chordName: 'G7', positions: '2123xx', firstFret: '2'}, 
    //         {chordName: 'Cm', positions: 'x13321', firstFret: '3'}, 
    //         {chordName1: 'A♭', positions1: '133211', firstFret1: '4', chordName2: 'A♭m', positions2: '133211', firstFret2: '4'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'F#<sup>o</sup>', positions2: 'x2414x'}, 
    //         {chordName1: 'Fm', positions1: 'x13321', firstFret1: '7', chordName2: 'B♭7', positions2: '2123xx', firstFret2: '5'}, 
    //         {chordName1: 'E♭', positions1: 'x13331', firstFret1: '6', chordName2: 'A♭m', positions2: '133211', firstFret2: '4'}, 
    //         {chordName: 'E♭', positions: 'x13331', firstFret: '6'}
    //     ]
    // },
    // {   
    //     title: "I Can't Give You Anything But Love",
    //     year: 1936,
    //     chords: [
    //         {chordName: 'G', positions: '133211', firstFret: '3'}, 
    //         {chordName1: 'G/B', positions1: '31x34', firstFret1: '5', chordName2: 'B♭<sup>o</sup>', positions2: '2x12xx', firstFret2: '5'}, 
    //         {chordName: 'Am7', positions: '1x111x', firstFret: '5'}, 
    //         {chordName: 'D7', positions: 'x13131', firstFret: '5'}, 
    //         {chordName: 'G', positions: '133211', firstFret: '3'}, 
    //         {chordName1: 'G/B', positions1: '31x34', firstFret1: '5', chordName2: 'B♭<sup>o</sup>', positions2: '2x12xx', firstFret2: '5'}, 
    //         {chordName: 'Am7', positions: '1x111x', firstFret: '5'}, 
    //         {chordName: 'D7', positions: 'x13131', firstFret: '5'}, 
    //         {chordName: 'G7', positions: '2123xx', firstFret: '2'}, 
    //         {chordName: '%'}, 
    //         {chordName: 'C', positions: 'x13331', firstFret: '3'}, 
    //         {chordName: '%'}, 
    //         {chordName: 'A7', positions: '2123xx', firstFret: '4'}, 
    //         {chordName: '%'}, 
    //         {chordName: 'D7', positions: 'x13131', firstFret: '5'}, 
    //         {chordName: '%'}, 
    //         {chordName: 'G', positions: '133211', firstFret: '3'}, 
    //         {chordName1: 'G/B', positions1: '31x34', firstFret1: '5', chordName2: 'B♭<sup>o</sup>', positions2: '2x12xx', firstFret2: '5'}, 
    //         {chordName: 'Am7', positions: '1x111x', firstFret: '5'}, 
    //         {chordName: 'D7', positions: 'x13131', firstFret: '5'}, 
    //         {chordName: 'G7', positions: '2123xx', firstFret: '2'}, 
    //         {chordName: '%'}, 
    //         {chordName: 'C', positions: 'x13331', firstFret: '3'}, 
    //         {chordName: '%'}, 
    //         {chordName: 'C', positions: 'x13331', firstFret: '3'}, 
    //         {chordName: 'C#<sup>o</sup>', positions: 'x2313x', firstFret: '4'},
    //         {chordName: 'G/D', positions: '11343', firstFret: '5'}, 
    //         {chordName: 'E7', positions: 'x3231xx', firstFret: '5'}, 
    //         {chordName: 'Am7', positions: '1x111x', firstFret: '5'}, 
    //         {chordName: 'D7', positions: 'x13131', firstFret: '5'}, 
    //         {chordName1: 'G', positions1: '133211', firstFret1: '3', chordName2: 'E7', positions2: 'x3231xx', firstFret2: '5'}, 
    //         {chordName1: 'Am7', positions1: '1x111x', firstFret1: '5', chordName2: 'D7', positions2: 'x13131', firstFret2: '5'}]
    // }
   

];





export default SongData;