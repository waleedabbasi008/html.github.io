import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./sdata";
const num = Sdata[0];
console.log(num);
function ncard(val,index,arr){

}
ReactDOM.render(
    <>
    <h1 className="heading-style">List of top 10 netflix series in 2020</h1>

    {Sdata.map(function ncard(val){
        return(
    <Card imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
/>
);
    }
    )
    }

<a className="btn" href="https://www.netflix.com/signup/planform"><button className="btn" >Check the netflix premium Rates</button></a>
        
</>,
document.getElementById('root')

)
