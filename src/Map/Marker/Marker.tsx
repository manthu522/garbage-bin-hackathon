import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { colorCode, assetName, onClick, thrashLevel, totalCapacity, percentage } = props;
    return (
        <div>
            <div onClick={onClick} style={{ paddingBottom: 10, height: 45 }}>
                <div
                    style={{
                        backgroundColor: colorCode,
                        border: `1px solid black`,
                        borderRadius: "4px",
                        color: '#282c34',
                        display: "block",
                        fontSize: '24px',
                        // left: "-20px",
                        padding: "6px 15px",
                        position: "relative",
                        // top: "-20px",
                        width: 'max-content',
                        zIndex: 1000
                    }}
                >
                    <div style={{display: 'flex'}}>
                        <div>{`Name: ${assetName} | `}</div>
                        <div style={{marginLeft: '8px'}}>{ `Capacity: ${totalCapacity}cm | `}</div>
                        <div style={{marginLeft: '8px'}}>{ `Filled: ${(Number(percentage) * 100).toFixed(0)}%`}</div>
                    </div>
                    <span
                        style={{
                            borderLeft: "10px solid transparent",
                            borderRight: "10px solid transparent",
                            borderTop: `10px solid black`,
                            bottom: "-10px",
                            left: "calc(50% - 10px)",
                            position: "absolute"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Marker;