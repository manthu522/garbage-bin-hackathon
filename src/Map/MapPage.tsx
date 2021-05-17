import React from "react";
import GoogleMapReact from "google-map-react"
import Marker from "./Marker/Marker";
interface IProps {
    text: string
    lat: number
    lng: number
}
// const Marker = ({ text }: IProps) => <div>{text}</div>;
const data = [
    {
        "hubId": "HAU94730022",
        "assetId": "",
        "assetName": "OBR",
        "latitude": 14.189768939638858,
        "longitude": 78.29096728682399,
        "trashLevel": 5,
        "colorCode": "red"
    },
    {
        "hubId": "HAU94730023",
        "assetId": "",
        "assetName": "binName2",
        "latitude": 15.189768939638858,
        "longitude": 78.29096728682399,
        "trashLevel": 8,
        "colorCode": "green"
    }
]

const handleApiLoaded = (_map: any, _maps: any) => {
    // use map and maps objects
};
const defaultProps = {
    center: {
        lat: 14.189768939638858,
        lng: 78.29096728682399,
    },
    zoom: 11,
};

function MapPage({ }): JSX.Element {

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "100%" }}>
            {<GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDwUoDNf4KP2QP3zxsMa7R295vbgBuUvxg" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {
                    data.map(obj => {
                        return <Marker key={`${obj.assetId}_${obj.hubId}`} onClick={() => console.log('clicked ')} lat={obj.latitude}
                            lng={obj.longitude}
                            color={obj.colorCode}
                            name={obj.assetName} />
                    })
                }
            </GoogleMapReact> }
        </div>
    );
}

export { MapPage };
