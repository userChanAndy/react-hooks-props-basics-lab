import React from "react";

function Links (props) {
    const github = props.github
    const linkedin = props.linkedin
    return (
        <>
            <h3>Links</h3>
            <a href = {github}>{github}</a>
            <a href = {linkedin}>{linkedin}</a>
        </>
    )
}

export default Links 