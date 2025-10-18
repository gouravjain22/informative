import { FETCH_DATA_REQUEST } from "./const"


export const fetchData = (amount) =>{
    console.log('action clicked')
    return{
       type : FETCH_DATA_REQUEST,
       payload: amount
    }
   
}