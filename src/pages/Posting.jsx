import React, {useState}  from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import { signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const Posting = () => {
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [post, setPost] = useState("");
    const navigate = useNavigate();

    const onBlogPost = async (e) =>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), {
              Title: title,
              Tag: tag,
              Post: post,
            //   publish: db.firestore.Timestamp.fromDate(new Date())
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Blog post added sucessfully")
          } catch (e) {
            console.error("Error adding document: ", e);
            alert("Unable to post to blog. Try again!")
          }
    }

    const onLogout = () => {
        
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful")
        navigate("/admin")
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <>  
            <nav className='flex pt-6 justify-between lg:justify-between px-4 lg:px-32 items-center'>
                <p className='lg:text-lg text-sm'>
                    <Link to="#">
                        <span className='italic font-bold text-primary'>Ayuda</span>content
                    </Link>            
                </p>        

                <div 
                    className="lg:block "
                >                    
                    <button 
                        className="lg:px-6 px-4 py-1 lg:py-3 text-sm             
                        font-semibold rounded-full border 
                        border-purple-200 bg-primary text-white"
                        onClick={onLogout}
                    >
                        Logout
                    </button>             
                </div>                        
            </nav>  

            <section className="lg:mx-auto mx-6 mt-20 mb-20 lg:w-1/2">
                <h1 className="font-bold mb-4 text-xl">
                    Add Blog
                </h1>

                <form id="paymentForm" className='lg:text-base text-sm space-y-6'>
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            required 
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Tags
                        </label>
                        <select
                            id="tag"
                            name="tag"                                                    
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option>Tags</option>
                            <option>Books</option>
                            <option>English</option>
                            <option>Technology</option>
                            <option>SEO</option>
                            <option>Science</option>
                            <option>Religion</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Body
                        </label>
                        <div className="mt-1">
                        <textarea
                            id="post"
                            name="post"
                            rows={10}
                            value={post}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"                            
                            onChange={(e)=>setPost(e.target.value)}
                        />
                        </div>                        
                    </div>

                    {/* <div>
                        <label class="block">
                            <span class="sr-only">Choose profile photo</span>
                            <input type="file" class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
                        </label>
                    </div> */}
                

                    <div className="form-group">
                        <label 
                            className="block text-sm font-medium text-gray-700"                           
                        >
                            Tags
                        </label>
                        <input 
                            type="type" 
                            id="tag" 
                            value={tag}
                            onChange={(e)=>setTag(e.target.value)}
                            required 
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                        />
                    </div>                    

                    <div className="form-submit">
                        <button 
                            type="submit" 
                            onClick={onBlogPost}
                            className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                        > 
                            Post
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Posting
