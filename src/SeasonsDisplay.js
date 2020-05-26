import React from 'react';

const date = new Date();
const month = date.getMonth();

const getSeason = (lat,date) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};


const SeasonsDisplay = (props) => {

    const season = getSeason(props.lat,new Date());
    const result = (season == 'summer')? "burr it's chilly":"It's hot";
    
    return(
        <h1>{result}</h1>
    )
};

export default SeasonsDisplay;