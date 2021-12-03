import React from "react";
import dev from "../../images/dev.jpg"
import { AiFillLinkedin } from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import aamir from "../../images/aamir.jpg";
import ridhi from "../../images/ridhi.jpg";


function Developers() {
    return (
        <>
            <div className="container  d-bottom "> 
              <center><img src={dev} className= "responsive-image"/></center>
              <center><h6 className="d-title d-bottom">Our Developers</h6></center>
              <center>
                    <div className="d-box">
                    <img styles = {{paddingTop : 20}} className=" logo responsive-image mompreneurPadding-top"
                                src={aamir}
                                 height="250" width="250" />
                        <h2 className="name-padding">Mohd Aamir</h2>
                            <h6>Full Stack Web Developer</h6>
                            <h6>B.Tech (CSE) - 2022</h6>
                            <div class="row-lg-4">
                            <a className="name-padding" href="https://www.linkedin.com/in/mohd-aamir-01ba73198/"><AiFillLinkedin size="25"/></a>
                            <a className="name-padding btn-margin" href="https://github.com/aamirzaidi"><AiFillGithub size="25"/></a>
                            </div>
                    </div>
                    <div className="d-box">
                    <img styles = {{paddingTop : 20}} className=" logo responsive-image mompreneurPadding-top"
                                src={ridhi}
                                 height="250" width="250" />
                        <h2 className="name-padding">Ridhi Jain</h2>
                            <h6>Full Stack Web Developer</h6>
                            <h6>B.Tech (CSE) - 2022</h6>
                            <div class="row-lg-4">
                            <a className="name-padding" href="https://www.linkedin.com/in/ridhi-jain-8b73711b5/"><AiFillLinkedin size="25"/></a>
                            <a className="name-padding btn-margin " href="https://github.com/ridhi-2801"><AiFillGithub size="25"/></a>
                            </div>
                    </div>
                </center>
            </div>
        </>
    )
}
export default Developers