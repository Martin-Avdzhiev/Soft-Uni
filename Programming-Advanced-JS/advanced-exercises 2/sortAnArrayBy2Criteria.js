function solve (array){
        array.sort((a,b) => {
            if (a.length > b.length){
                return 1
            }
            else if (b.length > a.length){
                return -1;
            }
            else if (a.charCodeAt() > b.charCodeAt()){
                return 1
            }
            else if (a.charCodeAt() < b.charCodeAt()){
                return -1
            }
            else {
                return 0;
            }
        })
        return array.join('\n');
}

solve (['test', 'Deny','omen', 'Default'])