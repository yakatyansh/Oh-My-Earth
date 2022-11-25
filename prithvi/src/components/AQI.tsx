import React from "react";


const AQI = ({city='',aqi=''}) => {
    return (
        <div className="background-white">
            <h1>{city}</h1>
            <h1>{aqi}</h1>
        </div>
    );
}


export default AQI;