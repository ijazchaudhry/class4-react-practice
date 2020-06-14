import React,{useState} from 'react';


function Room() {
    let [isLit ,setLit]=useState(false);
    let [age,setAge]=useState(24);
//     function updateLit(){
//     console.log("Button Clicked");
//    setLit(!isLit);
//     }
    // function increseAge(){
    //     console.log(" increment Button Clicked");
    //    setAge(++age);
    //     }
        const decreseAge=()=>{
            console.log("decrement Button Clicked");
            setAge(--age);
            }
  return (
    <div>
        <h1>Hello world i am ijaz sarwar</h1>
        <hr/>
      <h2>this room is {isLit? "lit" :"dark"}</h2>
      <br/>
      Age={age}
      <br/>
      {/* <button onClick={updateLit}>toogle light</button> */}
      <button onClick={()=>setLit(!isLit)}>toogle light</button>
      <br/>
      {/* <button onClick={increseAge}>Increment Age</button> */}
      <button onClick={()=>{
            console.log("decrement Button Clicked");
            setAge(++age);
            }
            }> Increse Age</button>
      <br/>
      <button onClick={decreseAge}>decrese Age</button>
    </div>
  );
}

export default Room;
