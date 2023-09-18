
import { DEPOSITE_CASH, WIDRAW_CASH } from "../Constant/Constant";
export const counterReduser=(state={balance : 0},{type,payload})=>{
    switch(type){
    case DEPOSITE_CASH:
        return{balance : state.balance + payload}
       
      case WIDRAW_CASH:
        return{balance : state.balance - payload} 
       
       
       
        default:
            return state
    }
    

}