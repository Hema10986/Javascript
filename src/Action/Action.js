import { DEPOSITE_CASH, WIDRAW_CASH } from "../Constant/Constant"

export const deposite=(amt)=>(dispatch)=>{
    dispatch({type : DEPOSITE_CASH , payload : amt})
}
export const widraw=(amt)=>(dispatch)=>{
 dispatch({type : WIDRAW_CASH , payload : amt})

}