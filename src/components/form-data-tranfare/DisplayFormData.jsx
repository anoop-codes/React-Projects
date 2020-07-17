import React, { Fragment } from 'react';


const DisplayFromData = ({ displayData, bgColor }) => {

    const getBgColor = () => {
        return {
            backgroundColor: bgColor
        }
    }

    return (
        <Fragment>
            {displayData.length > 0 &&
                <div className="jumbotron my-4" style={getBgColor()}>
                    {displayData}
                </div>}
        </Fragment>
    );
}

export default DisplayFromData;
