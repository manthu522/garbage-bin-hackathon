import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";

interface ISensorData {
    hubId: string
    assetId: string
    assetName: string
    latitude: number
    longitude: number
    thrashLevel: number
    colorCode: string
    percentage: string
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
    const [sensorData, setSensorData] = React.useState<ISensorData[] | []>([]);
    React.useEffect(() => {
        fetch("http://localhost:8080/api/sky-monarchs/sensor-data")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('data', result)
                    setSensorData(result.responseList)
                    console.log('sensor data', sensorData)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
        const clusterInterval = setInterval(() => {
            fetch("http://localhost:8080/api/sky-monarchs/sensor-data")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('data', result)
                    setSensorData(result.responseList)
                    console.log('sensor data', sensorData)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
        }, 60000)
        return () => {
            clearInterval(clusterInterval)
        }
    }, [])

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
