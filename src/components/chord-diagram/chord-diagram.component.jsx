import './chord-diagram.styles.scss';

import { nanoid } from 'nanoid';

const ChordDiagram = () => {


    const guitarStrings = ['e6', 'a5', 'd4', 'g3', 'b2', 'e1'];

    const renderedStrings = guitarStrings.map(guitarString => <div className="guitar-string" id={guitarString} key={nanoid()}></div>);

    const frets = ['fret-1', 'fret-2', 'fret-3', 'fret-4'];

    const renderedFrets = frets.map(fret => <div className="fret" id={fret} key={nanoid()}></div>);

    const fingerDots = [
        {guitarString: 'e6', fret: '1', strFret: 'e61', isVisible: 'hidden'},
        {guitarString: 'e6', fret: '2', strFret: 'e62', isVisible: 'hidden'},
        {guitarString: 'e6', fret: '3', strFret: 'e63', isVisible: 'hidden'},
        {guitarString: 'e6', fret: '4', strFret: 'e64', isVisible: 'hidden'},
        {guitarString: 'e6', fret: '5', strFret: 'e65', isVisible: 'hidden'},

        {guitarString: 'a5', fret: '1', strFret: 'a51', isVisible: 'hidden'},
        {guitarString: 'a5', fret: '2', strFret: 'a52', isVisible: 'hidden'},
        {guitarString: 'a5', fret: '3', strFret: 'a53', isVisible: 'hidden'},
        {guitarString: 'a5', fret: '4', strFret: 'a54', isVisible: 'hidden'},
        {guitarString: 'a5', fret: '5', strFret: 'a55', isVisible: 'hidden'},

        {guitarString: 'd4', fret: '1', strFret: 'd41', isVisible: 'hidden'},
        {guitarString: 'd4', fret: '2', strFret: 'd42', isVisible: 'hidden'},
        {guitarString: 'd4', fret: '3', strFret: 'd43', isVisible: 'hidden'},
        {guitarString: 'd4', fret: '4', strFret: 'd44', isVisible: 'hidden'},
        {guitarString: 'd4', fret: '5', strFret: 'd45', isVisible: 'hidden'},

        {guitarString: 'g3', fret: '1', strFret: 'g31', isVisible: 'hidden'},
        {guitarString: 'g3', fret: '2', strFret: 'g32', isVisible: 'hidden'},
        {guitarString: 'g3', fret: '3', strFret: 'g33', isVisible: 'hidden'},
        {guitarString: 'g3', fret: '4', strFret: 'g34', isVisible: 'hidden'},
        {guitarString: 'g3', fret: '5', strFret: 'g35', isVisible: 'hidden'},

        {guitarString: 'b2', fret: '1', strFret: 'b21', isVisible: 'hidden'},
        {guitarString: 'b2', fret: '2', strFret: 'b22', isVisible: 'hidden'},
        {guitarString: 'b2', fret: '3', strFret: 'b23', isVisible: 'hidden'},
        {guitarString: 'b2', fret: '4', strFret: 'b24', isVisible: 'hidden'},
        {guitarString: 'b2', fret: '5', strFret: 'b25', isVisible: 'hidden'},

        {guitarString: 'e1', fret: '1', strFret: 'e11', isVisible: 'hidden'},
        {guitarString: 'e1', fret: '2', strFret: 'e12', isVisible: 'hidden'},
        {guitarString: 'e1', fret: '3', strFret: 'e13', isVisible: 'hidden'},
        {guitarString: 'e1', fret: '4', strFret: 'e14', isVisible: 'hidden'},
        {guitarString: 'e1', fret: '5', strFret: 'e15', isVisible: 'hidden'},
    ];

    // const renderedFingerDots = fingerDots.map(dot => <div className={`dot ${dot.guitarString}`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div>);
    
    // console.log(fingerDots.filter(dot => dot.guitarString === 'e6'));
    
    // let positions = '133211'

    let getChordDots = (positions) => {
        // get each guitar string from fingerdots array 
        let e6 = fingerDots.filter(dot => dot.guitarString === 'e6');
        let a5 = fingerDots.filter(dot => dot.guitarString === 'a5');
        let d4 = fingerDots.filter(dot => dot.guitarString === 'd4');
        let g3 = fingerDots.filter(dot => dot.guitarString === 'g3');
        let b2 = fingerDots.filter(dot => dot.guitarString === 'b2');
        let e1 = fingerDots.filter(dot => dot.guitarString === 'e1');
        // create array from positions string
        // positions.split('');
     
        let chordDots = [];

               
        // filter through dots that match position fret and push to new array chordDots
        const chordDotE6 = e6.filter(gfret => gfret.fret === positions[0]);
        const chordDotA5 = a5.filter(gfret => gfret.fret === positions[1]);
        const chordDotD4 = d4.filter(gfret => gfret.fret === positions[2]);
        const chordDotG3 = g3.filter(gfret => gfret.fret === positions[3]);
        const chordDotB2 = b2.filter(gfret => gfret.fret === positions[4]);
        const chordDotE1 = e1.filter(gfret => gfret.fret === positions[5]);


        chordDots.push(chordDotE6, chordDotA5, chordDotD4, chordDotG3, chordDotB2, chordDotE1);

        // chordDots.forEach(chord => chord.isVisible = 'visible');

        // console.log(chordDots[0][0].strFret);

        // get strFret value from chordDots array and push to new array chorDotsStrFret
        const chordDotsStrFret = [];
        for(let item of chordDots){
            for (let itemb of item) {
                chordDotsStrFret.push(itemb.strFret);
            }
        }
        
        console.log(chordDotsStrFret);

        // assign visible values to dots in fingerDots that match the value of the strFret value in chordDotsStrFret array 
        const selectedfingerDots = fingerDots.map((o) => chordDotsStrFret.includes(o.strFret) ? Object.assign({}, o, {isVisible: 'visible'}) : o);
        console.log(selectedfingerDots);



        // let chordDotsWithVisibleClass = (visibleChordDots, allChordDots) => allChordDots.map(
        //     function(item) {

        //         for (let visibleChordDot of visibleChordDots) {
        //             if (item === visibleChordDot)
        //             {item.isVisible = 'visible';
        //         return item;}
        //         return item;
        //         } 





                
        //     }
        // );

        // console.log(chordDotsWithVisibleClass(chordDots, fingerDots));
        
        // console.log(fingerDots);

        // map through fingerDots and conditionally render those in chordDots array with visibility visible
        // const renderedFingerDots = fingerDots.map(dot => 
        //     chordDots.map(chordDot => { return chordDot === dot ? <div className={`dot ${dot.guitarString}`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div> : <div className={`dot ${dot.guitarString} visible`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div>})

            
        //        )

        

        for (let i in chordDots) {

            const renderedFingerDots = fingerDots.map(dot => 
                { return i.fret === dot.fret ? <div className={`dot ${dot.guitarString} visible`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div> : <div className={`dot ${dot.guitarString}`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div>})
  
              
                 
  
                 return renderedFingerDots;

        }




        // const renderedFingerDots = fingerDots.map(dot => 
        //       { return chordDots.includes(dot) ? <div className={`dot ${dot.guitarString} `} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div> : <div className={`dot ${dot.guitarString} visible`} id={`${dot.guitarString}-${dot.fret}`} key={nanoid()}></div>})

            
               

        //        return renderedFingerDots;
                
            

        
        }

        let renderedFingerDots = getChordDots('133211');


    // console.log(renderedFingerDots);
    // console.log(renderedFingerDots[1]);
    // console.log(renderedFingerDots[2]);
    
    // const chosenFingerDots = renderedFingerDots.map(chosenDot => <div className={`dot ${chosenDot.guitarString} visible`} id={`${chosenDot.guitarString}-${chosenDot.fret}`} key={nanoid()}></div>);

    // console.log(renderedFingerDots);



    const stringXOs = [{str: 'e6', xo: 'x'}, {str: 'a5', xo: 'x'}, {str: 'd4', xo: 'x'}, {str: 'g3', xo: 'x'}, {str: 'b2', xo: 'x'}, {str: 'e1', xo: 'x'}];

    const renderedStringXOs = 
        stringXOs.map(stringChar => <div className='string-char' id={`${stringChar.str}xo`} key={nanoid()}>{stringChar.xo}</div>)  
    ;

   


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