import React from "react";

const ContentSecret = ({ secretText }) => {
    return (
        <div>
            <p><textarea readOnly={true} value={secretText}/></p>
        </div>
    )
};

export default ContentSecret