import SearchBox from "./Searchbox"
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        feelslike:24.84,
        temp: 25,
        temp_min:25.05,
        temp_max:25.05,
        humidity:47,
        weather:"haze",
        city:"Bangalore"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}