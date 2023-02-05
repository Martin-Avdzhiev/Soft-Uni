function printDeckOfCards (cards){
   const result = [];
    function createCard (face,suit){
        
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
        const faces = {
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            'J': 'J',
            'Q': 'Q',
            'K': 'K',
            'A': 'A'
        }
        if (!faces.hasOwnProperty(face) || !suits.hasOwnProperty(suit)){
            return  console.log(`Invalid card: ${face}${suit}`);
        }
        result.push(faces[face] + suits[suit]);
    }
    for (const card of cards){
        let face = card.substring(0,card.length-1);
        let suit = card.substring(card.length-1);
        createCard(face,suit);
    }
    
    console.log(result.join(' '));
    
}
printDeckOfCards(['5S', '3D', 'QD']);