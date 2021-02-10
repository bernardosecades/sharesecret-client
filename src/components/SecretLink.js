import React from "react";

// Read: https://stackoverflow.com/questions/39361859/autoselect-text-in-input-reactjs
const SecretLink = ({ link }) => {

    return (
        <div className="secretLink">
            <ul>
                <li><input type={"text"} readOnly={true} value={link}/></li>
                <li><button>Delete this secret</button></li>
            </ul>
        </div>
    )
};

export default SecretLink
