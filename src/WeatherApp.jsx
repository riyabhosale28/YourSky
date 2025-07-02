import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import "./App.css";

export default function WeatherApp(){
     const BACK_URL="https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const [WeatherInfo,setWeatherInfo] = useState({
        city:"Wai",
        feelslike:29.13,
        humidity: 75,
        temp: 26.92,
        tempMax: 26.92,
        tempMin: 26.92,
        weather: "very heavy rain",
    })

  


    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
       
        <div id="root" >
            <div className="mainContainer">
            <h2 className="appTitle"> < CloudIcon/> YourSky </h2>
            <div className="weatherContainer">
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo} />
        </div>
        </div>
        </div>
       
    )
   
}