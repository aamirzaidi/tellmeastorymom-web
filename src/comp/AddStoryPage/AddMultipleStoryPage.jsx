import React, { useState,useEffect ,useRef } from "react";
import db from "../../firebase";
import { Form,FormGroup, FormLabel, FormControl , Alert} from "react-bootstrap";
import {useAuth} from "../FirebaseAuthService/AuthContext";
import ProgressBar from "../FirebaseStorageService/ProgressBar";
import { useHistory } from "react-router-dom";

function AddMultipleStoryPage() {

    const ref = db.collection('categories');
    const [values,setValues]=useState([]);
    const [error, setError] = useState('');
    
    const [loading , setLoading] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [storyDaya , setStoryData] = useState({});
    const history = useHistory();

    const [image,setImage] = useState(null);
    const [image2,setImage2] = useState(null);
    const [image3,setImage3] = useState(null);
    const [image4,setImage4] = useState(null);
    const [image5,setImage5] = useState(null);
    const [image6,setImage6] = useState(null);

    const titleRef = useRef();
    const contentRef = useRef();
    const contentRef2 = useRef();
    const contentRef3 = useRef();
    const contentRef4 = useRef();
    const contentRef5 = useRef();
    const contentRef6 = useRef();

    const categoryRef = useRef();
    const {currentUser} = useAuth();

    const [noOfFiles,setNoOfFiles] = useState(0);

    function getList(){
        return ref.get().then((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((dropdownValues) =>{
              items.push(dropdownValues.data().categoryName);
            });   
            setValues(items);
        });
    }

    function handleChangeImage2(event){
        setError('');
        if(!image){
            return setError('First Upload previous images!');
        }
        let selected = event.target.files[0];
        if(selected){
            setImage2(selected);
        }
        setNoOfFiles(2);
    }

    function handleChangeImage3(event){
        setError('');
        if(!image || !image2){
            return setError('First Upload previous images!');
        }
        let selected = event.target.files[0];
        if(selected){
            setImage3(selected);
        }
        setNoOfFiles(3);
    }

    function handleChangeImage4(event){
        setError('');
        if(!image || !image2 || !image3){
            return setError('First Upload previous images!');
        }
        let selected = event.target.files[0];
        if(selected){
            setImage4(selected);
        }
        setNoOfFiles(4);
    }

    function handleChangeImage5(event){
        setError('');
        if(!image || !image2 ||!image3 || !image4){
            return setError('First Upload previous images!');
        }
        let selected = event.target.files[0];
        if(selected){
            setImage5(selected);
        }
        setNoOfFiles(5);
    }

    function handleChangeImage6(event){
        setError('');
        if(!image || !image2 ||!image3 || !image4 || !image5){
            return setError('First Upload previous images!');
        }
        let selected = event.target.files[0];
        if(selected){
            setImage6(selected);
        }
        setNoOfFiles(6);
    }

    function handleChangeImage(event){
        setError('');
        let selected = event.target.files[0]
            if(selected){
                setImage(selected);
            }
            setNoOfFiles(1);
    }

    async function handleSubmitStory(e){
        e.preventDefault(); 
        setLoading(true);

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        const title = titleRef.current.value;
        
        const content = contentRef.current.value;
        const content2 = contentRef2.current.value;
        const content3 = contentRef3.current.value;
        const content4 = contentRef4.current.value;
        const content5 = contentRef5.current.value;
        const content6 = contentRef6.current.value;

        const category = categoryRef.current.value;
        const posted = `Posted on ${day<10? "0"+day : ""+day }-${month < 10 ? "0" + month : "" + month}-${year}`;
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
            return setError("Content para 1 must be of at least 100 characters!");   
        }

        if(category === "DEFAULT"){
            setLoading(false);
            return setError("No category selected!");   
        }

        if(image === null){
            setLoading(false);
            return setError("No image selected!");  
        }

        if(content6.length > 0){
            if(content5.length ===0 || content4.length ===0 || content3.length ===0 || content2.length ===0){
                return setError('Kindly fill content paras in sequence only!')
            }
        }else if(content5.length > 0){
            if(content4.length ===0 || content3.length ===0 || content2.length ===0){
                return setError('Kindly fill content paras in sequence only!')
            }
        }else if(content4.length > 0){
            if(content3.length ===0 || content2.length ===0){
                return setError('Kindly fill content paras in sequence only!')
            }
        }else if(content3.length > 0){
            if(content2.length ===0){
                return setError('Kindly fill content paras in sequence only!')
            }
        }

        const storyData = {
            author : author, 
            content : content,
            content2 : content2, 
            content3 : content3, 
            content4 : content4, 
            content5 : content5, 
            content6 : content6, 
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
        <h5 style = {{paddingBottom : 10, paddingTop : 10 }}>Story will be uploaded once approved by Admin!</h5>
            <div className="col-auto">
                <FormGroup id = "title">
                    <FormLabel><h6>Story Title</h6></FormLabel>
                    <FormControl type="text" ref= {titleRef} className="form-control" id="autoSizingInput" placeholder="Enter Title" required />
                </FormGroup>    
            </div>

            <div className="col-auto form">
            <FormGroup id = "image">
                <FormLabel><h6>Choose Image 1</h6></FormLabel>
                <div>
                    <input type="file" accept="image/*" onChange={(e) =>handleChangeImage(e)}/>
                    <img src={image && URL.createObjectURL(image)}/>
                </div>
            </FormGroup>
            </div>

            <div className="form col-auto">
            <FormGroup id = "content">
                <FormLabel><h6>Content Para 1</h6></FormLabel>
                <div className="input-group">
                <textarea  ref = {contentRef} id="w3review" name="w3review" rows="5" cols="200" required>
                </textarea>
                </div>
            </FormGroup>
            </div>

            {error && <Alert variant="danger">{error}</Alert> } 
            <div className="col-auto form">
            <FormGroup id = "image">
                <FormLabel><h6>Choose Image 2</h6></FormLabel>
                <div>
                    <input type="file" accept="image/*" onChange={(e) =>handleChangeImage2(e)}/>
                    <img src={image2 && URL.createObjectURL(image2)}/>
                </div>
            </FormGroup>
            </div>

            <div className="form col-auto">
            <FormGroup id = "content">
                <FormLabel><h6>Content Para 2</h6></FormLabel>
                <div className="input-group">
                <textarea  ref = {contentRef2} id="w3review" name="w3review" rows="5" cols="200" >
                </textarea>
                </div>
            </FormGroup>
            </div>

            {error && <Alert variant="danger">{error}</Alert> } 
            <div className="col-auto form">
            <FormGroup id = "image">
                <FormLabel><h6>Choose Image 3</h6></FormLabel>
                <div>
                    <input type="file" accept="image/*" onChange={(e) =>handleChangeImage3(e)}/>
                    <img src={image3 && URL.createObjectURL(image3)}/>
                </div>
            </FormGroup>
            </div>

            <div className="form col-auto">
            <FormGroup id = "content">
                <FormLabel><h6>Content Para 3</h6></FormLabel>
                <div className="input-group">
                <textarea  ref = {contentRef3} id="w3review" name="w3review" rows="5" cols="200" >
                </textarea>
                </div>
            </FormGroup>
            </div>

            {error && <Alert variant="danger">{error}</Alert> } 
            <div className="col-auto form">
            <FormGroup id = "image">
                <FormLabel><h6>Choose Image 4</h6></FormLabel>
                <div>
                    <input type="file" accept="image/*" onChange={(e) =>handleChangeImage4(e)}/>
                    <img src={image4 && URL.createObjectURL(image4)}/>
                </div>
            </FormGroup>
            </div>

            <div className="form col-auto">
            <FormGroup id = "content">
                <FormLabel><h6>Content Para 4</h6></FormLabel>
                <div className="input-group">
                <textarea  ref = {contentRef4} id="w3review" name="w3review" rows="5" cols="200" >
                </textarea>
                </div>
            </FormGroup>
            </div>

            {error && <Alert variant="danger">{error}</Alert> } 
            <div className="col-auto form">
            <FormGroup id = "image">
                <FormLabel><h6>Choose Image 5</h6></FormLabel>
                <div>
                    <input type="file" accept="image/*" onChange={(e) =>handleChangeImage5(e)}/>
                    <img src={image5 && URL.createObjectURL(image5)}/>
                </div>
            </FormGroup>
            </div>

            <div className="form col-auto">
            <FormGroup id = "content">
                <FormLabel><h6>Content Para 5</h6></FormLabel>
                <div className="input-group">
                <textarea  ref = {contentRef5} id="w3review" name="w3review" rows="5" cols="200" >
                </textarea>
                </div>
            </FormGroup>
            </div>

            {error && <Alert variant="danger">{error}</Alert> } 
            <div className="col-auto form">
            <FormGroup id = "image">
                <FormLabel><h6>Choose Image 6</h6></FormLabel>
                <div>
                    <input type="file" accept="image/*" onChange={(e) =>handleChangeImage6(e)}/>
                    <img src={image6 && URL.createObjectURL(image6)}/>
                </div>  
            </FormGroup>
            </div>

            <div className="form col-auto">
            <FormGroup id = "content">
                <FormLabel><h6>Content Para 6</h6></FormLabel>
                <div className="input-group">
                <textarea  ref = {contentRef6} id="w3review" name="w3review" rows="5" cols="200" >
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

            {error && <Alert variant="danger">{error}</Alert> } 

            <div className="col-auto form d-bottom">
                <button disabled={loading} type="submit" className="btn btn-primary">Submit Story</button>
            </div>
            {submit && <ProgressBar 
                file ={image}
                file2 = {image2}
                file3 = {image3}
                file4 = {image4}
                file5 = {image5}
                file6 = {image6} 
                noOfFiles = {noOfFiles}
                storyData = {storyDaya}
            />}
        </Form>
    );
}

export default AddMultipleStoryPage
