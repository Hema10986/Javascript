import React, { useState } from 'react'
import { deposite, widraw } from './Action/Action'
import{UseDispatch,useSelector}from 'react-redux'

export default function App() {
  const dispatch=UseDispatch()
  const{balance}=useSelector(state=>state.account)
  console.log(balance);
  const[amout,setamount]=useState()
  const[amout1,setamount1]=useState()
  const handelDeposite=()=>{
    dispatch(deposite(amout))
  }
  const handlewidraw=()=>{
    dispatch(widraw(amout1))
  }
  return <>
    <div class="container">
      <div class='row'>
        <div class="col-sm-6 offset-sm-3">
          <div class="card">
            <h5 className="m-3 text-center">banl balanc : {balance && balance}</h5>
            <div class="card body">
              <div className='mt-2'>
                <input type="text" class="forn-control"
                 onChange={e=>setamount(+e.target.value)}
              
                id="name" placeholder='enter ypur name'/>
                </div>
                <div>
                <input type="text" class="forn-control"
              
                onChange={e=>setamount1(+e.target.value)}
               id="name" placeholder='enter ypur amount'/>
              </div>
              <div class="card-footer">
                <button type="button" onClick={handelDeposite} class="btn btn-primary">+</button>
                <button type="button"  onClick={handlewidraw}class="btn btn-primary">-</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  
}
