const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const breeds = require('../data/breeds.json');

module.exports = (req,res) => {
    const pathname = url.parse(req.url).pathname;
    console.log(req);
    console.log(res);
    if(pathname == '/' && req.method == 'GET'){

    }
    else{
        return true;
    } 
}