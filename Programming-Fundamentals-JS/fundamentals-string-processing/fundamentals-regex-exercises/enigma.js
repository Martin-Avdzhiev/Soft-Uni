function starEnigma(encryptedMessage) {

    let lettersPattern = /[STARstar]+/g
    let messageCount = encryptedMessage.shift()
    let decryptedMessage = '';
    for (const el of encryptedMessage) {
        if(el.match(lettersPattern)){
        let characters = el.split('');
        let letters = el.match(lettersPattern);
        let lettersCount = letters.join('').length
        for (const char of characters) {
            let replacement = char.charCodeAt(0) - lettersCount;
            let text = String.fromCharCode(replacement);
            decryptedMessage += text;
        }
    } 
    }
 
    let decryptedInfoPattern = /@(?<planetName>[A-Za-z]+)[^\@\-\!\:\>]*:(?<population>\d+)[^\@\-\!\:\>]*!(?<attackType>[A|D]{1})![^\@\-\!\:\>]*->(?<soldierCount>\d+)/g 
    if(decryptedMessage.length > 0){
    let attackedPlanets = [];
    let destroyedPlanets = [];
    while ((validInfo = decryptedInfoPattern.exec(decryptedMessage)) !== null) {
        if (validInfo.groups['attackType'] === 'A') {
            attackedPlanets.push(validInfo.groups['planetName'])
        } else if (validInfo.groups['attackType'] === 'D') {
            destroyedPlanets.push(validInfo.groups['planetName'])
        }
    }
    attackedPlanets.sort((a,b) => a.localeCompare(b))
    destroyedPlanets.sort((a,b) => a.localeCompare(b))
    if (attackedPlanets.length > 0) {
        console.log(`Attacked planets: ${attackedPlanets.length}`)
        for (const planet of attackedPlanets) {
            console.log(`-> ${planet}`)
        }
    } else {
        console.log(`Attacked planets: 0`)
    }
    if (destroyedPlanets.length > 0) {
        console.log(`Destroyed planets: ${destroyedPlanets.length}`)
        for (const planet of destroyedPlanets) {
            console.log(`-> ${planet}`)
        }
    } else {
        console.log(`Destroyed planets: 0`)
    }
}
}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
)
console.log(`------`)
starEnigma(['3',
    "(''DGvywgex>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfynhf?8555&I&2C9555']
)