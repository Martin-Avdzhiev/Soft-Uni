function extract(content) {
    let pattern = /(\([^(]+\))/g;
    const elements = document.getElementById(content);
    let matches = elements.textContent.matchAll(pattern);
    let result = [];
    for (const match of matches){
        result.push(match[1]);
    }
    return result.join('; ');
}