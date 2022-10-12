import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPost = async () => {
        // const querySnapshot = await getDocs(collection(db, "users"));
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        //     setPosts([doc.data()]);
        //     console.log("pots", posts)
        // });
        setLoading(true);
        await getDocs(collection(db, "users"))
            .then((querySnapshot)=>{
               

                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData)   
                setLoading(false); 
            })
       
    }
    console.log(posts);
    useEffect(()=>{
        fetchPost();
    }, [])

    
    return(
        <section className='relative '>
            <div>
                <Navbar/>
            </div>

            <section className='text-center mt-6'>
                {
                    !loading?
                    posts?.map((post, id)=> (
                        
                            <section key={id}>
                                <h1>
                                    {post.Title}
                                </h1>
                                <p>
                                    {post.Tag}
                                </p>
                            </section>
                        
                    ))
                    :
                    "loading . . ."
                }
                Blog
            </section>

            <div className="w-full fixed bottom-0 left-0">
                <Footer/>       
            </div>    
        </section>
    )
}

export default Blog