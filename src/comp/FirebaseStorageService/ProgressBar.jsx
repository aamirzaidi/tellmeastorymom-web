import React from 'react';
import useStorage from '../FirebaseStorageService/useStorage'; 

const ProgressBar = ({file , file2 , file3 , file4 , file5, file6, storyData, noOfFiles}) => {
const {url , progress} = useStorage(file , file2 , file3 , file4 , file5, file6, storyData, noOfFiles);

    return (
        <div className = 'progress-bar' style = {{width: progress + '%', paddingLeft : 10, paddingRight : 10 }}>
            {progress === 100 ? 'File Uploaded' : `Uploading ${progress}%`} 
        </div>
    ) 
}

export default ProgressBar;