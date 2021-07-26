import React, { useState,useEffect ,useRef } from "react";
import db from "../../firebase";
import { Form,FormGroup, FormLabel, FormControl , Alert} from "react-bootstrap";
import {useAuth} from "../FirebaseAuthService/AuthContext";
import ProgressBar from "../FirebaseStorageService/ProgressBar";
import { useHistory } from "react-router-dom";

function AddStory() {
    const ref = db.collection('categories');
    const [values,setValues]=useState([]);
    const [error, setError] = useState('');
    const [image,setImage] = useState(null);
    const [loading , setLoading] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [storyDaya , setStoryData] = useState({});
    const history = useHistory();

    const titleRef = useRef();
    const contentRef = useRef();
    const categoryRef = useRef();
    const {currentUser} = useAuth();

    function handleChangeImage(event){
        setError('');
        let selected = event.target.files[0];
        if(selected){
            setImage(selected);
        }
    }

    function getList(){
        return ref.get().then((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((dropdownValues) =>{
              items.push(dropdownValues.data().categoryName);
            });   
            setValues(items);
        });
    }

    async function handleSubmitStory(e){
        e.preventDefault(); 
        setLoading(true);

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let lessThanZero = false;
        if(month/10 < 1){
            lessThanZero = true;
        }
        let year = date.getFullYear();

        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const category = categoryRef.current.value;
        const posted = `Posted on ${day}-${lessThanZero ? "0" + month : month}-${year}`;
        const related = [category];

        if(!currentUser){
            setLoading(false);
            return setError("Not Logged In! Kindly log in first to submit a story!"); 
        }

        const authorName = currentUser.displayName;
        const author = `By ${authorName}`;

        if(title.length <5){
            setLoading(false);
             return setError("Title must be of at least 5 characters!");
        }
        
        if(content.length < 50){
            setLoading(false);
            return setError("Content must be of at least 100 characters!");   
        }

        if(category === "DEFAULT"){
            setLoading(false);
            return setError("No category selected!");   
        }

        if(image === null){
            setLoading(false);
            return setError("No image selected!");  
        }

        const storyData = {
            author : author, 
            content : content,
            content2 : '',
            content3 : '',
            content4 : '',
            content5 : '',
            content6 : '',
            posted : posted, 
            related : related,
            title : title,
        }


        setStoryData(storyData);

        /* Addition code of story is happening inside 
            useStorage through the ProgressBar component below */
        
        if(storyData){
            setSubmit(true);
        }
    }


    useEffect(() => {
        getList();
      }, [])

    function createOptions(index){
       return(
        <option key={index} value={index}>{index}</option>
       );
    }


    return (
            <Form onSubmit={handleSubmitStory} className="form col gy-2 gx-3 align-items-center">
            <button onClick={() => history.push("/addMultipleStory")} 
                    className="btn btn-sm btn-outline-primary mr-2 mt-2 mb-1">
                        <b>Add Story With Miltiple Images</b>
            </button>

            <h5 style = {{paddingBottom : 10, paddingTop : 10 }}>Story will be uploaded once approved by Admin!</h5>

                <div className="col-auto">
                    <FormGroup id = "title">
                        <FormLabel><h6>Story Title</h6></FormLabel>
                        <FormControl type="text" ref= {titleRef} className="form-control" id="autoSizingInput" placeholder="Enter Title" required />
                    </FormGroup>    
                </div>
                <div className="form col-auto">
                <FormGroup id = "content">
                    <FormLabel><h6>Content</h6></FormLabel>
                    <div className="input-group">
                    <textarea  ref = {contentRef} id="w3review" name="w3review" rows="15" cols="200" required>
                    </textarea>
                    </div>
                </FormGroup>
                </div>
                <div className="form col-auto">
                <FormGroup id = "category">
                    <FormLabel><h6>Category</h6></FormLabel>
                    <select ref = {categoryRef} defaultValue={'DEFAULT'} className="col form-select" id="autoSizingSelect">
                        <option value="DEFAULT" disabled>Select A Category...</option>
                        {values.map((index) => createOptions(index))} 
                    </select>
                </FormGroup>
                </div>
                <div className="col-auto form">
                <FormGroup id = "image">
                    <FormLabel><h6>Choose Image</h6></FormLabel>
                    <div>
                        <input type="file" accept="image/*" onChange={(e) =>handleChangeImage(e)}/>
                        <img src={image && URL.createObjectURL(image)}/>
                    </div>
                </FormGroup>
                </div>
                {error && <Alert variant="danger">{error}</Alert> } 
                <div className="col-auto form d-bottom">
                    <button disabled={loading} type="submit" className="btn btn-primary">Submit Story</button>
                </div>
                {submit && <ProgressBar 
                    file ={image} 
                    storyData = {storyDaya}
                    noOfFiles = {1}
                />}
            </Form>
    );
}

export default AddStory;