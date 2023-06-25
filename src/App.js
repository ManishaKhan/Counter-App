import React from 'react';
import './App.css';
import { useSelector , useDispatch} from 'react-redux';
import {incNumber,decNumber} from './Action/Index';

export default function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();


  const disableTheMinus=()=>{
    if(myState==0){
    return true;
  }
}

  return (
    <div className="App">
      <div className="container">
        <h1>Increment/Decreament Counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity_minus" title="Decreament" > 
          <button onClick={()=>dispatch(decNumber())} disabled={disableTheMinus()}>-</button></a>

          <input name="quantity" type="text" class="quantity_input" value={myState}></input>

          <a className="quantity_plus" title="Increament">
            <button onClick={()=> dispatch(incNumber())}>+</button></a>
        </div>

      </div>
    </div>
  )
}
