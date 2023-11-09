import React, { useMemo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '350px',
  height: '350px'
};

function MapComponent() {
  const center = useMemo(() => ({ lat: 39.5025615, lng: -6.3665644 }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (isLoaded)
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} animation={window.google.maps.Animation.DROP} />
      </GoogleMap>
    );
}

export default React.memo(MapComponent);
