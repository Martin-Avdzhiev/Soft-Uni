import { getUserData, setUserData, clearUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(url, options){
    try {
        const response = await fetch(host+url, options);
        if(!response.ok){
            if(response.status == 403){
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if(response.status == 204){
            return response;
        }
        else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function createOptions(method = 'get', data){
    const options = {
        method,
        headers: {}
    }

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }
    const userData = getUserData();
    if(userData != null){
        
    }
}