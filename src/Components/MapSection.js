import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapSection = ({ center, mapStyles, mapOptions }) => {
    const [mapError, setMapError] = useState(false);

    const handleMapError = () => {
        console.warn('Google Maps failed to load, showing fallback');
        setMapError(true);
    };

    if (mapError) {
        return (
            <div style={{
                ...mapStyles,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '8px'
            }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h3>Map Unavailable</h3>
                    <p>We're located in Canmore, Alberta</p>
                    <p>Contact us for directions</p>
                </div>
            </div>
        );
    }

    return (
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={11}
            center={center}
            options={mapOptions}
            onError={handleMapError}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default React.memo(MapSection); 