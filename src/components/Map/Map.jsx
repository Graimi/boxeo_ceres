import React, { useMemo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// Fijamos el tamaño del mapa
const containerStyle = {
  width: '300px',
  height: '300px'
};

// Función para cargar el mapa
function MapComponent() {
  // Establecemos la ubicación del mapa
  const center = useMemo(() => ({ lat: 39.5025615, lng: -6.3665644 }), []);

  // Función para llamar a la API de Google MAPS
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
