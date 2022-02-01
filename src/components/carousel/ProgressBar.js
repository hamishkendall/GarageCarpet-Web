import React from 'react';

function ProgressBar (props) {

    const { completed } = props;

    const containerStyles = {
        height: '10px',
        width: '100%',
        backgroundColor: "#000000",
        overflow: 'hidden'
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#FFFFFF",
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s linear'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles} />
        </div>
    );
}

export default ProgressBar;