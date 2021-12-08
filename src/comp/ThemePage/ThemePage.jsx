import React from 'react'
import Container from '@material-ui/core/Container';
import logo from "../../images/logo.jpg";
import { Row, Col , Button} from 'react-bootstrap';

function ThemePage() {
    return (
        <>   
        <div className="login-padding login-outline">
        <Container>
          <img className="logo" src={logo} height="80" width="80"/>
          <h1>Select Theme</h1>
              <Row className = "rows">
                <Col className= "columns" lg ={4} xs ={12}><img className="logo" src={logo} height="80" width="80"/></Col>
                <Col className= "columns" lg ={4} xs ={12}><img className="logo" src={logo} height="80" width="80"/></Col>
                <Col className= "columns" lg ={4} xs ={12}><img className="logo" src={logo} height="80" width="80"/></Col>
              </Row>
              <Row className = "rows">
              <Col className= "columns" lg ={4} xs ={12}><img className="logo" src={logo} height="80" width="80"/></Col>
                <Col className= "columns" lg ={4} xs ={12}><img className="logo" src={logo} height="80" width="80"/></Col>
                <Col className= "columns" lg ={4} xs ={12}><img className="logo" src={logo} height="80" width="80"/></Col>
              </Row>
          <Button type = "submit" >Select</Button>    
        </Container>
        </div>
      </>
    )
}

export default ThemePage
