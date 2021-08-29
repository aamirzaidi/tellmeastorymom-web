import React from "react";
import dev from "../../images/dev.jpg"
import { AiFillLinkedin } from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import { Row, Col , Container} from 'react-bootstrap';

function Developers() {
    return (
        <>
            <div class="container  d-bottom "> 
              <center><img src={dev} className= "responsive-image"/></center>
              <center> <h6 className="d-title d-bottom">Our Developers</h6></center>
              <center>
                {/* <Container>
                <Row class="rows profile-card ">
                        <Col className= " d-bottom" lg ={2} xs ={6}>
                         <img styles = {{paddingTop : 20}} className=" logo responsive-image"
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQGu95m4alP_og/profile-displayphoto-shrink_800_800/0/1598511572312?e=1629331200&v=beta&t=h0zWw1t954iAf9G_m9zGW7P5k52arOpVx2sgVG60uvs" height="250" width="250" />
                        </Col>
                        <Col className= "columns" lg ={2} xs ={6}>
                            <h1 className="name-padding">Mohd Aamir</h1>
                            <h6 >B.Tech (CSE)</h6>
                            <div class="row-lg-2">
                            <a className="name-padding" href="https://www.linkedin.com/in/mohd-aamir-01ba73198/"><AiFillLinkedin size="30"/></a>
                            <a className="name-padding" href="https://github.com/aamirzaidi"><AiFillGithub size="30"/></a>
                            </div>
                        </Col>
                    </Row>
                    <Row class="rows profile-card">
                        <Col className= "columns" lg ={6} xs ={12}>
                            <img className="logo"
                            src="https://media-exp1.licdn.com/dms/image/C5603AQFn4G5OyeKc_A/profile-displayphoto-shrink_800_800/0/1612438527208?e=1629331200&v=beta&t=5uv9qC9z7jtMYdrOPo1Up62LkcTpKDmyMBb2aehuRh0" height="250" width="250"/>
                        </Col>
                        <Col className= "columns" lg ={6} xs ={12}>
                            <h1 className="name-padding">Ridhi Jain</h1>
                            <h6 >B.Tech (CSE)</h6>
                            <div class="row-lg-2">
                            <a className="name-padding" href="https://www.linkedin.com/in/ridhi-jain-8b73711b5/"><AiFillLinkedin size="30"/></a>
                            <a className="name-padding" href="https://github.com/ridhi-2801"><AiFillGithub size="30"/></a>
                            </div>
                       </Col>
                    </Row>
                    </Container> */}
                    <div className="d-box">
                    <img styles = {{paddingTop : 20}} className=" logo responsive-image mompreneurPadding-top"
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQGu95m4alP_og/profile-displayphoto-shrink_200_200/0/1598511572312?e=1635984000&v=beta&t=YTD9WATOEnCJCajw1fEy6FoYMLNHvmOzfoQpmuzobDA" height="250" width="250" />
                        <h2 className="name-padding">Mohd Aamir</h2>
                            <h6>Full Stack Web Developer</h6>
                            <h6>B.Tech (CSE) - 2022</h6>
                            <div class="row-lg-4">
                            <a className="name-padding" href="https://www.linkedin.com/in/mohd-aamir-01ba73198/"><AiFillLinkedin size="25"/></a>
                            <a className="name-padding btn-margin" href="https://github.com/aamirzaidi"><AiFillGithub size="25"/></a>
                            </div>
                    </div>
                    <div className="d-box space-between ">
                    <img styles = {{paddingTop : 20}} className=" logo responsive-image mompreneurPadding-top"
                                src="https://media-exp1.licdn.com/dms/image/C5603AQFn4G5OyeKc_A/profile-displayphoto-shrink_200_200/0/1612438527208?e=1635984000&v=beta&t=6y36ba6JLjtAuqX8pFcJV4urSs_x-z-GgS0Alqvy1Jk" height="250" width="250" />
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