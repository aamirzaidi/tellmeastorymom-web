import React, { useState , useEffect} from 'react'
import db from "../../firebase";
import { useHistory } from 'react-router-dom';
import {useAuth} from "../FirebaseAuthService/AuthContext";
import StoryPageBody from '../StoryPage/storyPageBody';
import { Alert} from 'react-bootstrap';

function AdminPage() {
    const {currentUser} = useAuth();
    const [pendingStories, setPendingStories] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

async function getPendingStories(){
    setLoading(true);
        await db.collection('PendingStories').get().then((querySnapshot) => {
           const items = [];
               querySnapshot.forEach((story) => {
                  let storyData = story.data();
                  storyData.id = story.id;
                  items.push(storyData);
                  console.log(storyData);
         });
         setPendingStories(items);
        });
    setLoading(false); 
}

async function checkAdmin(){
    if(!currentUser){
        console.log('Not Logged In');
        setIsAdmin(false);
    }else{
        await db.collection('Users').doc(currentUser.uid).get().then((querySnapshot) => {
            const userData = querySnapshot.data();
            if(userData.role === 'admin'){
                console.log('User is admin');
                setIsAdmin(true);
            }
        })
    }
}

async function handleApproveCall(storyId){
    const pendingStoryRef = db.collection('PendingStories').doc(storyId);
    const AllStoriesRef = db.collection('Stories');

    try{
        await pendingStoryRef.get().then(async (snapshot) =>{
            const storyData = snapshot.data();
            await AllStoriesRef.add({
                'title' : storyData.title,

                'content' : storyData.content,
                'content2' : storyData.content2,
                'content3' : storyData.content3,
                'content4' : storyData.content4,
                'content5' : storyData.content5,
                'content6' : storyData.content6,

                'storyImageURL' : storyData.storyImageURL,
                'storyImageURL2' : storyData.storyImageURL2,
                'storyImageURL3' : storyData.storyImageURL3,
                'storyImageURL4' : storyData.storyImageURL4,
                'storyImageURL5' : storyData.storyImageURL5,
                'storyImageURL6' : storyData.storyImageURL6,

                'posted' : storyData.posted,
                'related' : storyData.related,
                'author' : storyData.author,
                'isLatest'  : true,
                
            }).then(async() => {
                console.log('Added to All Stories');
                await pendingStoryRef.delete().then(() => {
                    setError('Approved! Refresh to view changes!')   
                    console.log('Deleted from Pending Stories');    
                })    
            })
    
        })
    }catch(e){
        console.log(e);
    }
}

async function handleDisapproveCall(storyId){
    const pendingStoryRef = db.collection('PendingStories').doc(storyId);
    try{
        await pendingStoryRef.delete().then(() => {
            console.log('Deleted from Pending Stories'); 
            setError('Deleted! Refresh to view changes!')   
        }) 
    }catch(e){
        console.log(e);
    }
}

async function handleEditCall(storyData){
    
}

function createStories(story){
    return <>   
            {error && <Alert variant="danger">{error}</Alert> }  
            <StoryPageBody
                    key={story.id}
                    id={story.id}
                    title={ story.title}
                    content={story.content}
                    content2={story.content2}
                    content3={story.content3}
                    content4={story.content4}
                    content5={story.content5}
                    content6={story.content6}

                    posted= {story.posted}
                    author= {story.author}
                    related= {story.related}
                    storyImageURL={story.storyImageURL}
                    storyImageURL2={story.storyImageURL2}
                    storyImageURL3={story.storyImageURL3}
                    storyImageURL4={story.storyImageURL4}
                    storyImageURL5={story.storyImageURL5}
                    storyImageURL6={story.storyImageURL6}
                    
                    admin = {isAdmin}
                    onApprove={() => handleApproveCall(story.id)}
                    onDisApprove = {() => handleDisapproveCall(story.id)
                    }
                    />
                </>
}

useEffect(() => {
    getPendingStories();
 },[isAdmin]);

 useEffect(() => {
    checkAdmin();
 },[currentUser]);


if(loading){
     return <h1>Loading . . . </h1>
}

if(isAdmin === false){
    return <h1>Oops! You are not authorized for this Page ✌️</h1>
}

    return (
        <div >
            <h2>Admin Page</h2>
            {pendingStories.length === 0 ? <h4>Empty Result</h4> : pendingStories.map((story) => createStories(story))}
            {error && <Alert variant="danger">{error}</Alert> }  
        </div>
    )
}

export default AdminPage;
