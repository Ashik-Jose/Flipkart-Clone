import React, { useState } from "react";
import "./App.css";
import data from "./data.js";


function App() {
  function showAll(){
    console.log("hello")

      data.map((e)=>{setCategory({image:e.img,desc:e.desc})
      })
    }
  
  function showBreakfast(){

    console.log("hello")
    
  data.map((e)=>{
    if(e.category==='breakfast')
    // console.log(e.desc)
    return (
      <div>fdsvmdfv</div>
    // <div><img src={e.img} />
    // <p>{e.desc}</p></div>
      )
    }
  )
  }

  function showLunch(){

  data.map((e)=>{
    if(e.category==='lunch')
    return (<div><img src={e.img} />
    <p>{e.desc}</p></div>)
  })
  }

  function showShakes(){

  data.map((e)=>{
    if(e.category==='shakes')
    return (<div><img src={e.img} />
    <p>{e.desc}</p></div>)
  })
  }

  const [category,setCategory]=useState({
    image:"",
    desc:""
  })

  return (
    <div className="App">
      <header className="header">
        {" "}
        <h1> our menu</h1>
        <div className="btns">
          <button className="all" onClick={showAll}>all</button>
      <button className="breakfast" onClick={showBreakfast}>breakfast</button>
      <button className="lunch" onClick={showLunch}>lunch</button>
      <button className="dinner" onClick={showShakes}>Shakes</button>
        </div>
      </header>
      <div className="">
  {/* {
    data.map((e)=><div className="box"><img src={e.img}/>
    <p>{e.desc}</p></div>)
  } */}

  <img src={category.image} alt=""/>
  <p>{category.desc}</p>
</div>
    </div>
  );
}

export default App;
