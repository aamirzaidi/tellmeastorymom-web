import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import {useAuth} from '../FirebaseAuthService/AuthContext';
import { Row , Col , Alert} from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import red from '@material-ui/core/colors/red';
import db from "../../firebase";

function StoryPageBody(props) {

  const [isLiked, setIsLiked] = useState(false);
  const {currentUser} = useAuth();
  const [error, setError] = useState('');

  function Span(props){
    return <span className="badge rounded-pill bg-primary spn" >{props.name}</span> 
  }

  async function handlelikeToggle(){
    if(isLiked == true){

      if(!currentUser){
        return setError("Not Logged In! Kindly log in First!"); 
      }

      const usersLiked = props.isLiked;
      const newUsers = [];
      
      usersLiked.forEach((userId) => {
        if(userId !== currentUser.uid){
          newUsers.push(userId);
        }
      });

      try{
        await db.collection('Stories').doc(props.storyId).update({
          'isLiked' : newUsers
        });
      }catch(e){
        return setError('Error : Failed! Check Connection!')
      }

      setIsLiked(false);
    }else{

      if(!currentUser){
        return setError("Not Logged In! Kindly log in First!"); 
      }

      const usersLiked = props.isLiked;
      usersLiked.push(currentUser.uid);
      
      try{
        await db.collection('Stories').doc(props.storyId).update({
          'isLiked' : usersLiked
        });
      }catch(e){
        return setError('Error : Failed! Check Connection!')
      }

      setIsLiked(true);
    } 
  }

  function getIsLiked(){
    if(currentUser && props.isLiked && props.isLiked.includes(currentUser.uid)){
      setIsLiked(true);
    }
  }

  useEffect(() => {
    getIsLiked();
  },[])

    return (
      <div className="form">
        <div className = "storypage ">
          <center><h2 className="d-title d-box">{props.title}</h2></center>
          <center><h6>{props.author}</h6></center>
          <center><img className="responsive-image round" src={props.storyImageURL} /></center>
          <center><h5>{props.posted}</h5></center>
          <center><h6>Related Category</h6></center>   
          <center>  <p> {props.related && props.related.map((category , index) => 
                {return <Span 
                    name={category}
                    key = {index}
                  />})}
            </p></center>
          <p className="d-box">{props.content.replaceAll("\\n","\n").split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>))}
          </p>

          {props.storyImageURL2 && <center><img className="responsive-image round" src={props.storyImageURL2} /></center>}
          {props.content2 && <p className="d-box">{props.content2.replaceAll("\\n","\n").split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>))}
          </p>}

          {props.storyImageURL3 && <center><img className="responsive-image round" src={props.storyImageURL3} /></center>}
          {props.content3  && <p className="d-box">{props.content3.replaceAll("\\n","\n").split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>))}
          </p>}

          {props.storyImageURL4 && <center><img className="responsive-image round" src={props.storyImageURL4} /></center>}
          {props.content4  && <p className="d-box">{props.content4.replaceAll("\\n","\n").split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>))}
          </p>}

          {props.storyImageURL5 && <center><img className="responsive-image round" src={props.storyImageURL5} /></center>}
          {props.content5  && <p className="d-box">{props.content5.replaceAll("\\n","\n").split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>))}
          </p>}   

          {props.storyImageURL6 && <center><img className="responsive-image round" src={props.storyImageURL6} /></center>}
          {props.content6  && <p className="d-box">{props.content6.replaceAll("\\n","\n").split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>))}
          </p>}        


    {error && <Alert variant="danger">{error}</Alert> }         
    <Button onClick = {handlelikeToggle}>
      {isLiked ?
        <Row> 
          <Col><p>Unlike</p></Col>
          <Col><FavoriteIcon style = {{ color : red[500] }}/></Col>
        </Row> 
        :
        <Row>
          <Col><p>Like</p></Col>
          <Col><FavoriteBorderIcon style = {{ color : red[500] }}/> </Col> 
        </Row> 
        }
      </Button>
    {props.admin === true 
      &&
      <div>
      <Button variant="warning" onClick={props.onApprove}> Approve </Button>
      <Button variant="danger" onClick={props.onDisApprove}> Disapprove </Button>
      </div> 
    }  
    </div>
    </div>)
}

export default StoryPageBody
