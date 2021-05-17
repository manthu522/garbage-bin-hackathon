import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { colorCode, assetName, onClick, trashLevel } = props;
    return (
        <div>
            <div onClick={onClick} style={{ paddingBottom: 10, height: 45 }}>
                <span
                    style={{
                        backgroundColor: colorCode,
                        border: `1px solid black`,
                        borderRadius: "4px",
                        color: 'black',
                        display: "block",
                        fontSize: '24px',
                        // left: "-20px",
                        padding: "6px 15px",
                        position: "relative",
                        // top: "-20px",
                        width: 100,
                        zIndex: 1000
                    }}
                >
                    <span> {assetName} </span>
                    <span className="bold" style={{ marginLeft: 2 }}> {trashLevel} </span>
                    <span
                        style={{
                            borderLeft: "10px solid transparent",
                            borderRight: "10px solid transparent",
                            borderTop: `10px solid black`,
                            bottom: "-9px",
                            left: "calc(50% - 10px)",
                            position: "absolute"
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default Marker;