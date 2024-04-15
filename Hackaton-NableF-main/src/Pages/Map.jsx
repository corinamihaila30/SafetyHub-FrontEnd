import React from "react"
import GoogleMapReact from 'google-map-react';
import Navbar from "../Components/Navbar";


const Marker = ({ text }) => (
    <div>
    <img src="/images/map_pin.png" alt="pin" style={{
      padding: '5px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    }}>
    </img>
    <p style={{color:"red", fontSize:"0.8rem", fontWeight:"700"}} display>Danger</p>
    </div>
  );

  const getDescription = (e) => {
    console.log(e.target);
  }

const Mapp = () => {
  return (
    <div>
    <Navbar/>
    <div style={{width:"100%", height:"500px"}}>
    <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyDCS9dL7SN5zc8bfYPNYiQIAgMa525UC9s" }}
    defaultZoom={10}
    defaultCenter={{ lat: 44.47, lng: 26.10 }}>
            <Marker onClick={getDescription}
          lat={44.38}
          lng={26.10}
          text="Pericol"
        />
                    <Marker onClick={getDescription}
          lat={44.55}
          lng={26.13}
          text="Pericol"
        />
    </GoogleMapReact>
    </div>
  </div>
  )
}

export default Mapp