import React from "react";
import Diary from "./diary";
import Interview from "./interview";
import Quotes from "../homepage/body/quotes";
import Mark3 from "../../images/mark3.png";

function MompreneurCarousel(){
   return(
    <>  
    <div className="d-bottom">
    <Diary/>
    {/* <Quotes
    content="❝ Each new day is a blank page in the diary of your life. ❞"
    i="https://image.freepik.com/free-vector/woman-s-hands-holding-pen-writing-diary-personal-planning-organization-workplace_182089-308.jpg"
    /> */}
<img className ="responsive-image"src={Mark3} width="1300"/>
    <Interview/>
    </div>
    </>
   )
}

export default MompreneurCarousel;