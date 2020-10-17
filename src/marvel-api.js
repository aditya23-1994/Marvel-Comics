const md5 = require('md5');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config({'path': '../.env'});
export const getMarvelApi = () => {
    let ts = new Date().getTime()
    let hash =  md5(this.ts+process.env.REACT_APP_API_KEY+process.env.REACT_APP_USER_KEY);
    let url = 'https://gateway.marvel.com/v1/public/characters';
    let apikey = process.env.REACT_APP_API_KEY
    // generating a new date on every new request and genereating hash(md5)
    let marvelObj =  { apikey:apikey,
        ts : ts,
        hash :hash,
        url : url
    };
    console.log(marvelObj);
    
    return marvelObj;
};

