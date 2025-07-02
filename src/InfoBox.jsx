import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1614434163906-5520f43d4e7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1661715276689-619fb1c79d6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="Weather image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city }{
          info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
          <div>Temperature = {info.temp}&deg;C</div><br></br>
          <div>Humidity = {info.humidity}&deg;C</div><br></br>
           <div>Min Temp = {info.tempMin}&deg;C</div><br></br>
            <div>Max Temp = {info.tempMax}&deg;C</div><br></br>
             <div>The weather can be described as <i><b>{info.weather}</b></i> and feels like  {info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
    
    
    </div>

        </div>
    );
}



