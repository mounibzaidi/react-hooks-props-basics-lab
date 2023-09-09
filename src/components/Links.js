import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.linkedin}>{props.linkedin}</a>
            <a href={props.github}>{props.github}</a>
        </div>
    );
}

export default Links;