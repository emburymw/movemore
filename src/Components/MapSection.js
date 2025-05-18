import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapSection = ({ center, mapStyles, mapOptions }) => {
    return (
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={11}
            center={center}
            options={mapOptions}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default React.memo(MapSection); 