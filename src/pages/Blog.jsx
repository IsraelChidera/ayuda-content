import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPost = async () => {
        
        setLoading(true);
        await getDocs(collection(db, "users"))
            .then((querySnapshot)=>{
               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData);
                setLoading(false); 
                console.log(posts, newData);
            })
       
    }
    
    useEffect(()=>{
        fetchPost();
    }, [])

    
    return(
        <section className='relative '>
            <div>
                <Navbar/>
            </div>

            <section className='mx-auto w-4/5 mb-20 mt-20'>
                {
                    posts.length===0? (
                        <p>Fetching blog post... Please wait</p>
                    )
                    :
                    !loading?
                    posts?.map((post, id)=> (
                        
                        <section 
                            key={id}                            
                        >
                            <NavLink to={`/blog/${post.id}`}>
                                <div className="articles rounded-md mb-10 px-6 pt-8 mb-16 pb-16 lg:grid
                                    grid-cols-3 gap-6"
                                >
                                    <div className="col-span-2 lg:mb-0 mb-6">
                                        <p className="text-sm mb-12">                                            
                                            {post.createdAt.toDate().toDateString()}
                                        </p>
                                        {/* createdAt.toDate().toDateString()} */}
                                        <div>
                                            <h1 className="title text-4xl font-bold">
                                                {post.Title}
                                            </h1>

                                            <div 
                                                dangerouslySetInnerHTML={{__html: post.Post}}
                                                className="text-base mt-2 content"
                                            >
                                                {/* {post.Post} */}

                                            </div>
                                        </div>

                                        <p className="text-sm mt-16 lg:block hidden">
                                            {post.Tag}
                                        </p>
                                    </div>

                                    <div className=" flex rounded justify-center items-center">
                                        <img   
                                            // src={blogImage}
                                            src={post.postimage}
                                            alt="blog article image"
                                        />
                                    </div>
                                </div>
                            </NavLink>
                        </section>
                        
                    ))
                    :
                    (
                        <p className="font-bold text-center">
                            Fetching blog articles . . .
                        </p>
                    )
                }
                
            </section>

            <div 
                // className="w-full fixed left-0 bottom-0 "
                className={`${loading ? "w-full fixed left-0 bottom-0" : "w-full mt-20"}`}
            >
                <Footer/>       
            </div>    
        </section>
    )
}

export default Blog