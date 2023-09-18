import './Map.css';

import React, { useMemo, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function MapComponent() {
  const center = useMemo(() => ({ lat: 39.5025615, lng: -6.3665644 }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} title="EI" />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);

// import React, { useMemo } from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// function MapComponent() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyD781UIsz4nPuyyNTYZtNsxUgaTqeo6gjI'
//   });

//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }

// export default MapComponent;

// import React, { useEffect } from 'react';
// import { GoogleMap, Marker } from '@react-google-maps/api';

// function MapComponent() {
//   const googleMapsApiKey = process.env.EXT_PUBLIC_GOOGLE_MAPS_API_KEY;

//   useEffect(() => {
//     // Load the Google Maps JavaScript API script
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD781UIsz4nPuyyNTYZtNsxUgaTqeo6gjI&libraries=maps,marker&v=beta`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       // Initialize the map
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 39.50255584716797, lng: -6.3665642738342285 },
//         zoom: 14
//       });

//       // Add a marker to the map
//       new window.google.maps.Marker({
//         position: { lat: 39.50255584716797, lng: -6.3665642738342285 },
//         map,
//         title: 'My location'
//       });
//     };
//   }, []);

//   return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
// }

// export default MapComponent;
