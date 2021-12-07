import React , { useState , useEffect ,setState , useRef} from "react";
import { Form,FormGroup, FormLabel, FormControl , Alert} from "react-bootstrap";
import StoryPageBody from "./storyPageBody"
import CategoryCarousel from "../homepage/body/Category Carousel/CategoryCarousel"
import  {useParams } from "react-router-dom";
import db from "../../firebase";
import LoadingIndicator from "../LoadingIndicator";
import CommentsList from "./CommentsList";
import {useAuth} from "../FirebaseAuthService/AuthContext";
import Rating from 'react-simple-star-rating';
import { useLocation } from 'react-router';
import queryString from 'query-string';

import {  FacebookShareButton, 
  WhatsappShareButton, 
  TwitterShareButton,
   TelegramShareButton,
   LinkedinShareButton,
   FacebookIcon,
   WhatsappIcon,
   TelegramIcon,
   LinkedinIcon,
   TwitterIcon,
   EmailIcon,
   EmailShareButton,
   FacebookMessengerShareButton
  } from "react-share";

function StoryPage() {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const id = parsed.id;
  
  const [storyData, setStoryData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [similarStories, setSimilarStories] = useState([]);
  const [comments, setComments] = useState([]);
  const commentRef = useRef();
  const [error, setError] = useState('');
  const {currentUser} = useAuth();
  const [rating,setRating] = useState(0);

  const handleRating = (rate) => {
    setError('');
    setRating(rate);
    // Some logic
  }
  
  async function getStoryData(){
    setError('');
    setRating(0); 
      setLoading(true);
      const ref = await db.collection('Stories').doc(id).get()
        .then(function(doc) {
            if (doc.exists) {
              const items = doc.data();
              items.id = doc.id;
              setStoryData(items);
              setIsEmpty(false);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
      setLoading(false);
  }
  
  async function getSimilarStories(){
    if(storyData.related) {  
      const relatedCategory = await storyData.related;
      await db.collection('Stories').where('related' , 'array-contains' , relatedCategory[0]).limit(5).get().then(
        (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((story , index) => {
            if(story.id !== id){
              let data = story.data();
              data.id = story.id;
              items.push(data);
            }
          });
          setSimilarStories(items);        
        }
      )
    }
  }

  async function getComments(){
    try{
      const ref = await db.collection('Stories').doc(id).collection('Comments')
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((comment) => {
          let commentData = comment.data();
          commentData.id = comment.id;
          items.push(commentData);
        });
        setComments(items);
      })
    }catch(e){
      console.log('Error loading comments!');
    }
  }

  async function handleSubmitComment(e){
    e.preventDefault();
    setError('');
    const content = commentRef.current.value;
    
    if(!currentUser){
      return setError("Login first to submit a comment!");  
    }

    if(content.length < 4){
      return setError("Comment length must be atleast 4 characters");  
    }

    if(rating === 0){
      return setError("Kindly rate the story before submitting a comment 😄!");  
    }

    const ref = db.collection('Stories').doc(id).collection('Comments');
    const displayName = currentUser.displayName;
    const date = new Date();
    let month = date.getMonth() + 1;
    let lessThanZero = false;
    if(month/10 < 1){
        lessThanZero = true;
    }
    let ratingStars = rating === 0 ? 3 : rating;
    
    try{
      await ref.add({
        'commentBy' : displayName,
        'content' : content,
        'postedOn' : `${date.getDate()}-${lessThanZero ? "0" + month : month}-${date.getFullYear()}`,
        'ratingStars' : ratingStars
      }).then(() => {
        commentRef.current.value = '';
        setRating(0);
      })
    }catch(e){
        console.log(e);
        setError('Comment Not Uploaded! Check your connection!')
    }
  } 

  useEffect(() => {
    getStoryData();
  },[id]);

  useEffect(() => {
    getSimilarStories();
  },[storyData]);

  useEffect(() => {
    getComments();
  },[id]);

  if(Loading) {
    return <LoadingIndicator />
  }

  if(isEmpty){
    return <h1>404 Not Found !!</h1>
  }

      var url = "www.tellmeastorymom.com/storyData?id="+`${id}`;         
      var shareText = "\n"+storyData.title+"\n"+storyData.content.substring(0,310)+"..."+"\n\nFor complete story📖 check out the link.\n"+storyData.storyImageURL;
    return (
        <div className="container">
          <StoryPageBody
            storyId = {storyData.id} 
            title = {storyData.title}
            storyImageURL = {storyData.storyImageURL}
            storyImageURL2 = {storyData.storyImageURL2}
            storyImageURL3 = {storyData.storyImageURL3}
            storyImageURL4 = {storyData.storyImageURL4}
            storyImageURL5 = {storyData.storyImageURL5}
            storyImageURL6 = {storyData.storyImageURL6}

            content = {storyData.content}
            content2 = {storyData.content2}
            content3 = {storyData.content3}
            content4 = {storyData.content4}
            content5 = {storyData.content5}
            content6 = {storyData.content6}

            author = {storyData.author}
            related = {storyData.related}
            posted = {storyData.posted}
            isLiked = {storyData.isLiked ?? []
            
            }
          />
         
            <h6 className="share-padding">Share via</h6>
            <div className="row-mb-2 share-padding">
           <FacebookShareButton url={url} quote={storyData.content.substring(0,310)+"..."+"For complete story check out the link."} hashtag={"#Tellmeastorymom"}>
           <FacebookIcon logoFillColor="#0b5ed7" size="20" round={true}/>
           </FacebookShareButton>
           <WhatsappShareButton  url={url} title={shareText}>
           <WhatsappIcon size="20" round={true}/>
           </WhatsappShareButton>
           <TelegramShareButton  url={url} title={shareText}>
           <TelegramIcon size="20" round={true}/>
           </TelegramShareButton>
           <TwitterShareButton  url={url} title={shareText}>
           <TwitterIcon size="20" round={true}/>
           </TwitterShareButton>
           <LinkedinShareButton  url={url} summary={shareText} title="Tellmeastorymom">
           <LinkedinIcon size="20" round={true}/>
           </LinkedinShareButton>
           <EmailShareButton url={url} subject="Tellmeastorymom" body={shareText}>
           <EmailIcon size="20" round={true}/>
             </EmailShareButton>
            </div>
            <Form onSubmit={handleSubmitComment} className="form col gy-2 gx-3 align-items-center">
            <FormGroup id = "comment">
              <FormLabel><h6>Add comment</h6></FormLabel>
              <div className="input-group">
                  <textarea  
                    ref = {commentRef} 
                    id="content" name="content" 
                    rows="4" cols="80" required>
                  </textarea>
              </div>
            </FormGroup>
            <FormGroup id = "comment">
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={20}
              transition
              fillColor='orange'
              emptyColor='gray'
              className='foo' // Will remove the inline style if applied
            />
            </FormGroup>
            {error && <Alert variant="danger">{error}</Alert> } 
            <div className="d-bottom">
               <button type="submit" className="btn btn-primary">Submit Comment</button>
            </div>
          </Form>
           { comments.length ===0 ? 
            <></>
            :
            <CommentsList
            comments = {comments}
          />}
           {similarStories.length == 0 ?
            <></>
            :
            <CategoryCarousel 
           categoryName = "Similar Stories"
           storyObject = {similarStories}
          />}
        </div>);
}

export default StoryPage;