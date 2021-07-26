import React from "react";

function Quotes(props) {
    return (
        <center><div class="row d-box ">
            <div class="col-lg-6 ">
                <h1 class="d">{props.content}</h1>
            </div>
            <div class="col-lg-6">
                <img src={props.i} className="round" height="300" width="350" />
            </div>
        </div></center>
    );
}

export default Quotes;