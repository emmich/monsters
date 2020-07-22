import React from 'react';
import './card.css'

const Card = props => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
            <h2>{props.monsters.name}</h2>
            <h3>{props.monsters.email}</h3>
            <h4>{props.monsters.address.city}</h4>
        </div>
    )
} 

export default Card