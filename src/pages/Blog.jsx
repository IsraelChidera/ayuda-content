import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import blogImage from '../assets/heroimage.png';

const Blog = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPost = async () => {
        
        setLoading(true);
        await getDocs(collection(db, "users"))
            .then((querySnapshot)=>{
               

                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData)   
                setLoading(false); 
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

            <section className='mx-auto w-4/5  mt-20'>
                {
                    !loading?
                    posts?.map((post, id)=> (
                        
                        <section 
                            key={id} 
                            className="articles rounded-md mb-10 px-6 py-8 grid
                            grid-cols-3 gap-4"
                        >
                            <div className="col-span-2">
                                <p className="text-sm mb-12">
                                    {today}
                                </p>
                                
                                <div>
                                    <h1 className="title text-4xl font-bold">
                                        {post.Title}
                                    </h1>

                                    <p className="text-base mt-2 content">
                                        {post.Post}
                                    </p>
                                </div>

                                <p className="text-sm mt-16">
                                    {post.Tag}
                                </p>
                            </div>

                            <div>
                                <img   
                                    src={blogImage}
                                    alt="blog article image"
                                />
                            </div>
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
                className={`${loading ? "w-full fixed left-0 bottom-0" : "w-full mt-10"}`}
            >
                <Footer/>       
            </div>    
        </section>
    )
}

export default Blog