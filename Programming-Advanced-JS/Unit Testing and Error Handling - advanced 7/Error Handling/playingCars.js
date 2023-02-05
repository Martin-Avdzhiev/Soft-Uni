function solve (face,suit){
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
        throw new Error('This is invalid input');
    }
    return faces[face] + suits[suit];
    
}

solve('1', 'S')