/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";

interface ISensorData {
    hubId: string;
    assetId: string;
    assetName: string;
    latitude: number;
    longitude: number;
    thrashLevel: number;
    colorCode: string;
    percentage: string;
    totalCapacity: string;
}

const handleApiLoaded = (_map: any, _maps: any) => {
    // use map and maps objects
};
const defaultProps = {
    center: {
        lat: 12.99238,
        lng: 77.72093,
    },
    zoom: 11,
};

function MapPage({ }): JSX.Element {
    const data: ISensorData[] =  [
        {
            "hubId": '1234567',
            "assetId": "123454233",
            "assetName": "Bin2",
            "latitude": 13.175322532737907,
            "longitude": 77.57725743535107,
            "thrashLevel": 109,
            "colorCode": "#33FF52",
            "percentage": "0.2",
            "totalCapacity": "110"
        }
    ]
    const [sensorData, setSensorData] = React.useState<ISensorData[] | []>(data);

    const makeAPICall = () => {
        fetch("http://localhost:8080/api/sky-monarchs/sensor-data")
            .then((res) => res.json())
            .then(
                (result) => {
                    setSensorData([...sensorData, ...result.responseList]);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            );
    };
    React.useEffect(() => {
        makeAPICall();
        const clusterInterval = setInterval(() => {
            makeAPICall();
        }, 30000);
        return () => {
            clearInterval(clusterInterval);
        };
    }, []);

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "100%" }}>
            {
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDwUoDNf4KP2QP3zxsMa7R295vbgBuUvxg" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    {sensorData?.map((obj: ISensorData) => {
                        return (
                            <Marker
                                key={`${obj.assetId}_${obj.hubId}`}
                                onClick={() => console.log("clicked ")}
                                lat={obj.latitude}
                                lng={obj.longitude}
                                {...obj}
                            />
                        );
                    })}
                </GoogleMapReact>
            }
        </div>
    );
}

export { MapPage };
