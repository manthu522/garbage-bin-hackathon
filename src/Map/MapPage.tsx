import React from "react";
import GoogleMapReact from "google-map-react";
interface IProps {
    text: string
    lat: number
    lng: number
}
const AnyReactComponent = ({ text }: IProps) => <div>{text}</div>;

function MapPage({ }): JSX.Element {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDwUoDNf4KP2QP3zxsMa7R295vbgBuUvxg" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={59.955413}
                    lng={30.337844}
                    text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}

export { MapPage };
