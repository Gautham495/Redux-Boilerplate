import {ADD} from '../Types/types'

export const add = (data) =>{

 return{
    type:ADD,
    payload:{
     data
    }
 }
}

