import React from 'react';


function countryCard(props) {

    return (
        <div className='country-card'>
            <img src={props.imgSrc} alt="country-flag"></img>
            <h4>{props.name}</h4>
            <p>{props.population}</p>

            <button onClick={props.callback}>{props.buttonText}</button>
        </div>
    )
}

export default countryCard