import React ,{ useState, useEffect} from "react";
import TopCarousel from "./Top carousel/TopCarousel";
import CategoryCarousels from "./Category Carousel/CategoryCarousel";
import db from "../../../firebase";
import { Link ,useHistory } from "react-router-dom";
import add from "../../../images/add.png";
import Mark1 from "../../../images/mark1.png";
import Mark2 from "../../../images/mark2.png";
import Contribute from "../../../images/Contribute.png";
import LoadingIndicator from "../../LoadingIndicator";

function Body(){
const[mythologicalStories, setMythologicalStories] = useState([]);
const[kindnessStories, setKindnessStories] = useState([]);
const[latestStories, setLatestStories] = useState([]);
const [loading, setLoading] = useState(false);

const history = useHistory();

async function getHomePageCategories(){
   const ref = db.collection('Stories');
   setLoading('true');

   await ref.where('related', 'array-contains', 'Mythological').limit(6).get().then((querySnapshot) => {
      const items = [];
          querySnapshot.forEach((story) => {
             let storyData = story.data();
             storyData.id = story.id;
             items.push(storyData);
    });
    setMythologicalStories(items);
   });

   await ref.where('related', 'array-contains', 'Kindness').limit(6).get().then((querySnapshot) => {
      const items = [];
          querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
    });
    setKindnessStories(items);
   });

   await ref.orderBy('posted').limit(6).get().then((querySnapshot) => {
      const items = [];
          querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
    });
    setLatestStories(items);
   });
   setLoading(false);
}

useEffect(() => {
   getHomePageCategories();
}, []);

if(loading){
   return (
      <LoadingIndicator />
   )
}


   return(
      <div> 
         <TopCarousel/>
         <img className ="responsive-image"src={Mark1} width="1400"/>
         {<CategoryCarousels 
               categoryName = "Latest Stories"
               storyObject = {latestStories}
            />}
         <Link to="/addStory">
               <center><img className="responsive-image" src={Contribute}  alt="..."  /></center>
            </Link>
            {<CategoryCarousels 
               categoryName = "Kindness Stories"
               storyObject = {kindnessStories}
            />}
         <img className ="responsive-image"src={Mark2} width="1400"/>
         {<CategoryCarousels 
               categoryName = "Mythological Stories"
               storyObject = {mythologicalStories}
            />}
         <div className="d-box"style={{alignItems: "center" , paddingBottom : 20, paddingTop : 30}} >
            <Link to="/exploreCategories"><h3><center>Explore More Categories👉</center></h3></Link></div>
         <div>
            <a href="https://play.google.com/store/apps/details?id=com.tellmeastorymom.tellmeastorymom">
            <center><img className="responsive-image" src={add}  alt="..."  /></center>
            </a>
         </div>  
      </div> 
   );
}
 
export default Body;