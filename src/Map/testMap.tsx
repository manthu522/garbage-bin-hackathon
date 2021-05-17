

import * as React from "react";
import { Paper } from "@material-ui/core";
import {
    GoogleMap,
    // Marker,
    withGoogleMap,
    withScriptjs
} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
/* @ts-ignore */
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import { compose, withHandlers, withProps } from "recompose";

const GOOGLE_KEY = 'AIzaSyDwUoDNf4KP2QP3zxsMa7R295vbgBuUvxg'
declare const google: any

interface IState {
    lat: number;
    lng: number;
}
const binsList = [
    {
        "hubId": "HAU94730022",
        "assetId": "",
        "assetName": "OBR",
        "latitude": 14.189768939638858,
        "longitude": 78.29096728682399,
        "trashLevel": 5,
        "colorCode": "FFFFF"
    },
    {
        "hubId": "HAU94730023",
        "assetId": "",
        "assetName": "binName2",
        "latitude": 15.189768939638858,
        "longitude": 78.29096728682399,
        "trashLevel": 8,
        "colorCode": "00000"
    }
]

const defaultProps = {
    center: {
        lat: 14.189768939638858,
        lng: 78.29096728682399,
    },
    zoom: 15,
};

const handleClick = () => {
    console.log('clicked ')
}

// Moved out of render to avoid the re-rendering of map
const MapWithAMarkerClusterer: any = compose(
    withProps({
        containerElement: <div style={{ height: "calc(.8*(100vh - 56px))" }} />,
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}`,
        loadingElement: <div className="bold" style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer: any) => {
            markerClusterer.getMarkers();
        }
    }),
    withScriptjs,
    withGoogleMap
)((props: any) => (
    <GoogleMap
        // ref="test"
        clickableIcons={false}
        defaultZoom={defaultProps.zoom}
        center={defaultProps.center}
    // onCenterChanged={() => this.refs.test.panTo(props.lat, props.lng)}
    >
            {binsList.map((markerValue: any, index: number) => {
                return (
                    <MarkerWithLabel
                        key={index}
                        icon={{
                            url: ""
                            // props.lat === markerValue.lat && props.lng === markerValue.lng
                            //   ? `${imagesPath}/highlightedMarker.png`
                            //   : `${imagesPath}/normalMarker.png`
                        }}
                        position={{ lat: markerValue.latitude, lng: markerValue.longitude }}
                        labelAnchor={
                            new google.maps.Point(markerValue.latitude, markerValue.latitude)
                        }
                        // labelStyle={{
                        //   backgroundColor:
                        //     props.lat === markerValue.lat && props.lng === markerValue.lng
                        //       ? props.palette.action
                        //       : props.palette.basic,
                        //   border: `1px solid ${props.palette.action}`,
                        //   borderRadius: "4px",
                        //   color:
                        //     props.lat === markerValue.lat && props.lng === markerValue.lng
                        //       ? props.palette.basic
                        //       : props.palette.action,
                        //   // left: "-20px",
                        //   padding: "6px 15px",
                        //   // position: "relative",
                        //   // top: "-20px",
                        //   overflow: "visible !important",
                        //   zIndex:
                        //     props.lat === markerValue.lat && props.lng === markerValue.lng
                        //       ? 10
                        //       : 2
                        // }}
                        onClick={() => console.log(markerValue, index)}
                    >
                        <div style={{ paddingBottom: 10, height: 45 }}>
                            <span
                                style={{
                                    backgroundColor: 'green',
                                    border: `1px solid black`,
                                    borderRadius: "4px",
                                    color: 'black',
                                    display: "block",
                                    fontSize: '24px',
                                    // left: "-20px",
                                    padding: "6px 15px",
                                    position: "relative",
                                    // top: "-20px",
                                    zIndex:1000
                                }}
                            >
                                <span> Hemanrjsbfjdbflsdb </span>
                                <span className="bold" style={{ marginLeft: 2 }}>
                                    Hemanth
                                </span>
                                <span
                                    style={{
                                        borderLeft: "10px solid transparent",
                                        borderRight: "10px solid transparent",
                                        borderTop: `10px solid red`,
                                        bottom: "-9px",
                                        left: "calc(50% - 10px)",
                                        position: "absolute"
                                    }}
                                />
                            </span>
                        </div>
                    </MarkerWithLabel>
                );
            })}
    </GoogleMap>
));

const TestMap = () => {

    return (
        <div>
            <Paper
                style={{
                    // height: "calc(100vh - 176px)",
                    height: "calc(.8*(100vh - 56px))",
                    minHeight: "40vh"
                }}
            >
                {binsList && binsList.length > 0 ? (
                    <MapWithAMarkerClusterer
                        onMapClick={handleClick}
                        lat={88.8987}
                        lng={98.9876}
                        markers={[]}
                    />
                ) : (binsList &&
                    binsList.length === 0) ||
                    !binsList ? (
                    <p
                        style={{
                            alignItems: "center",
                            display: "flex",
                            height: "100%",
                            justifyContent: "center"
                        }}
                    >
                        No hotels To show on Map
                    </p>
                ) : (
                    null
                )}
            </Paper>
        </div>
    );
}

export {TestMap}

