import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import db, { storage } from '../../firebase';


const useStorage = (file, file2, file3, file4, file5, file6, storyData, noOfFiles) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);

    // const [URL, setUrl] = useState(null);
    // const [URL2, setUrl2] = useState(null);
    // const [URL3, setUrl3] = useState(null);
    // const [URL4, setUrl4] = useState(null);
    // const [URL5, setUrl5] = useState(null);
    // const [URL6, setUrl6] = useState(null);

    const dbRef = db.collection('PendingStories');
    const history = useHistory();

    async function uploadStory(storyData, url, url2, url3, url4, url5, url6) {
        try {
            dbRef.add({
                'title': storyData.title,
                'posted': storyData.posted,
                'storyImageURL': url ?? null,
                'storyImageURL2': url2 ?? null,
                'storyImageURL3': url3 ?? null,
                'storyImageURL4': url4 ?? null,
                'storyImageURL5': url5 ?? null,
                'storyImageURL6': url6 ?? null,

                'related': storyData.related,

                'content': storyData.content,
                'content2': storyData.content2,
                'content3': storyData.content3,
                'content4': storyData.content4,
                'content5': storyData.content5,
                'content6': storyData.content6,

                'author': storyData.author,
                'isLatest': true,
            }).then(() => {
                console.log('Story Uploaded!');
                history.push("/");
            })
        } catch (e) {
            console.log(e);
            setError('Story Not Uploaded! Check your connection!')
        }
    }

    useEffect( async() => {

        //references
        const storageRef = storage.ref(`storyThumbnail/${file.name}`);
        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();

            if (noOfFiles === 1) {
                uploadStory(storyData, url);
            } else {
                const storageRef2 = storage.ref(`storyThumbnail/${file2.name}`);
                storageRef2.put(file2).on('state_changed', (snapshot) => {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(percentage);
                }, (error) => {
                    setError(error);
                }, async () => {
                    const url2 = await storageRef2.getDownloadURL();

                    if (noOfFiles === 2) {
                        uploadStory(storyData, url, url2);
                    } else {
                        const storageRef3 = storage.ref(`storyThumbnail/${file3.name}`);
                        storageRef3.put(file3).on('state_changed', (snapshot) => {
                            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            setProgress(percentage);
                        }, (error) => {
                            setError(error);
                        }, async () => {
                            const url3 = await storageRef3.getDownloadURL();

                            if (noOfFiles === 3) {
                                uploadStory(storyData, url, url2, url3);
                            } else {
                                const storageRef4 = storage.ref(`storyThumbnail/${file4.name}`);
                                storageRef4.put(file4).on('state_changed', (snapshot) => {
                                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                    setProgress(percentage);
                                }, (error) => {
                                    setError(error);
                                }, async () => {
                                    const url4 = await storageRef4.getDownloadURL();

                                    if (noOfFiles === 4) {
                                        uploadStory(storyData, url, url2, url3, url4);
                                    } else {
                                        const storageRef5 = storage.ref(`storyThumbnail/${file5.name}`);
                                        storageRef5.put(file5).on('state_changed', (snapshot) => {
                                            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                            setProgress(percentage);
                                        }, (error) => {
                                            setError(error);
                                        }, async () => {
                                            const url5 = await storageRef5.getDownloadURL();

                                            if (noOfFiles === 5) {
                                                uploadStory(storyData, url, url2, url3, url4, url5);
                                            } else {
                                                const storageRef6 = storage.ref(`storyThumbnail/${file6.name}`);
                                                storageRef6.put(file6).on('state_changed', (snapshot) => {
                                                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                    setProgress(percentage);
                                                }, (error) => {
                                                    setError(error);
                                                }, async () => {
                                                    const url6 = await storageRef6.getDownloadURL();
                                                    uploadStory(storyData, url, url2, url3, url4, url5, url6);
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

    },[])

    return { progress, error }
}

export default useStorage;

