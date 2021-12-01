import React from 'react'
import four04 from "../images/four04.jpg"; 
import {Row , Col} from 'react-bootstrap';

function Page404() {
    return (
        <div className="container">
        <center>
            <Row>
                <Col md= {6}><img src={four04} className= "responsive-image"/></Col>
                <Col>
                    <br/>
                    <br/>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h2 className="pnf-title" >Nobody is here! Go Away</h2>
                    <h5>You can't see me! I am hidden!</h5>
                </Col>
            </Row>
        </center>
        </div>
    )
}

export default Page404;
