import React from "react";

// react-leaflet imports 
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ center, zoom }) => {
    return (
        <>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                zoomControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </>
    )
}


export default Map;