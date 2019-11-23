import * as axios from 'axios';
let instance = axios.create({
    baseURL:"https://min-api.cryptocompare.com/data/",
    headers: {"X-Custom-Header":"82ae8d48f75a3489b6056c13536c1b2762e62b73d23402d038f1f8b8ee04e9a3"}
});

export const getFullData = (str)=>{
    return instance.get(`top/mktcapfull?limit=100&tsym=${str}`)
            .then((response)=>{
                return response.data
            })
}