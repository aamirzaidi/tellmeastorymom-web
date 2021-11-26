import React from "react";
import Diary from "./diary";
import Interview from "./interview";
import Mark3 from "../../images/mark3.png";

function MompreneurCarousel(){
   return(
    <>  
    <div className="d-bottom">
    <Diary/>
    <img className ="responsive-image"src={Mark3} width="1300"/>
    <Interview/>
    </div>
    </>
   )
}

export default MompreneurCarousel;