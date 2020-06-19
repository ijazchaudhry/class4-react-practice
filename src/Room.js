import React,{useState} from 'react';
import './Room.css'


function Room() {
    let [isLit ,setLit]=useState(false);
    let [temp,setTemp]=useState(72);
//     function updateLit(){
//     console.log("Button Clicked");
//    setLit(!isLit);
//     }
    // function increseTemp(){
    //     console.log(" increment Button Clicked");
    //    setAge(++temp);
    //     }
        const decreseTemp=()=>{
            console.log("decrement Button Clicked");
            setTemp(--temp);
            }
  return (
    <div className={"room "+(isLit? "lit":"dark")}>
        <h1>Hello world ""i am ijaz sarwar""</h1>
        <hr/>
      <h2>this room is {isLit? "lit" :"dark"}</h2>
      <br/>
      Temprature={temp}
      <br/>
      {/* <button onClick={updateLit}>toogle light</button> */}
      <button onClick={()=>setLit(!isLit)}>toogle light</button>
      <br/>
      {/* <button onClick={increseAge}>Increment Tempreture</button> */}
      <button onClick={()=>{
            console.log("decrement Button Clicked");
            setTemp(++temp);
            }
            }> Increse Temprature</button>
      <br/>
      <button onClick={decreseTemp}>Decrese Temprature</button>
    </div>
  );
}

export default Room;
