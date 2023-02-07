function solve (object){
    if (!object.method){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(object.method != 'GET' && object.method != 'POST' && object.method != 'DELETE' && object.method != 'CONNECT'){
         throw new Error('Invalid request header: Invalid Method');
    }
    
    const pattern = /([A-Z]*[a-z]*\.*\**[0-9]*)*/;
    if (!object.uri){
        throw new Error('Invalid request header: Invalid URI');
    }
    if (object.uri.includes(' ')){
        throw new Error('Invalid request header: Invalid URI');
    }
    let match = object.uri.match(pattern)[0];
    let input = object.uri.match(pattern).input;
    
    if (!match || match == '' || match != input){
        throw new Error('Invalid request header: Invalid URI');
    }
    //HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0
    if(!object.version){
        throw new Error('Invalid request header: Invalid Version');
    }
    if (object.version != 'HTTP/0.9' && object.version != 'HTTP/1.0' && object.version != 'HTTP/1.1' && object.version != 'HTTP/2.0'){
        throw new Error('Invalid request header: Invalid Version');
    }
    //<, >, \, &, ', "
    if (!object.message && object.message !== ''){
        throw new Error('Invalid request header: Invalid Message');
    }
    if (object.message.includes('<') || object.message.includes('>') || object.message.includes('\\') || object.message.includes('&') || object.message.includes('\'') || object.message.includes('"')){
        throw new Error('Invalid request header: Invalid Message');
    };
    return object;
}

solve ({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
});