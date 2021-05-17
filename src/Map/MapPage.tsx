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
        lat: 14.189768939638858,
        lng: 78.29096728682399,
    },
    zoom: 11,
};

function MapPage({ }): JSX.Element {
    const [sensorData, setSensorData] = React.useState<ISensorData[] | []>([]);
    React.useEffect(() => {
        fetch("http://localhost:8080/api/sky-monarchs/sensor-data").then(
            (res: any) => setSensorData(res.data))
        const clusterInterval = setInterval(() => {
            fetch("http://localhost:8080/api/sky-monarchs/sensor-data").then(
            (res: any) => setSensorData(res.data)
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
                    {sensorData.map((obj: ISensorData) => {
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
