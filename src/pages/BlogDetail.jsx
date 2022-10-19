import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../firebase';
import Navbar from '../components/Navbar';

const BlogDetail= () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const fetchData = async() => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setData(docSnap.data());
            console.log("Data", data)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert("Sorry! This blog post does not exist");
        }    

    }

    
    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <>
            <Navbar/>

            <section className='mx-auto w-4/5 mb-20 mt-14'>
                {/* {} */}
                <h1 className="title text-center text-5xl font-bold">
                    {data.Title}
                </h1>

                <p className="text-sm text-center pt-4">
                    {/* Posted at {" "} {data.createdAt.toDate().toDateString()} */}
                </p>
                
                <div className="mt-10 mb-10">
                    <img src={data.postimage} alt={data.Title} className="blogimage" />
                </div>

                <div 
                    dangerouslySetInnerHTML={{__html: data.Post}}
                    className="post"
                >
                    {/* {post.Post} */}

                </div>

                {/* <div className="post">
                    {data.Post}
                </div> */}
            </section>
        </>
    )
}

export default BlogDetail