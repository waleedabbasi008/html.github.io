import React from "react";
function Card(props) {
    return (

        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="my images" className="card-image" />
           
            <div className="card-content">
                <span className="card_category" >{props.title}</span>
                <h2 className="card-title">{props.sname}</h2>
                <a href={props.link} target="_blank" >
                    <button>Watch now</button>
                </a>

            </div>
            </div>
        </div>

    );
}
export default Card;

