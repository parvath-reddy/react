'use client'
import React from "react";
import { useState , useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  console.log("hay im harry");
  let a = fs.readFile(".gitignore");
  a.then(e=>{console.log(e.toString())}).catch(e=>{console.log(e)});
  return (
    <div>
    {/* {* im a component 
    // {count}
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    //   <button onClick={() => setCount(count - 1)}>Decrement</button> *} */}
    </div>
  );
}
