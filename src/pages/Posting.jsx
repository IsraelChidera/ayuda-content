import React, {useState}  from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase';

const Posting = () => {
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [post, setPost] = useState("");
 
    const onBlogPost = async (e) =>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), {
              title,
              tag,
              post
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return (
        <>              
            <section className="mx-auto mt-40 mb-20 w-1/2">
                <h1 className="font-bold mb-4 text-xl">
                    Add Blog
                </h1>

                <form id="paymentForm" className='space-y-6'>
                    <div className="form-group">
                        <label for="email">Title</label>
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
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Tags
                        </label>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"                            
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option>Books</option>
                            <option>English</option>
                            <option>Technology</option>
                            <option>SEO</option>
                            <option>Science</option>
                            <option>Religion</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="post" className="block text-sm font-medium text-gray-700">
                            Body
                        </label>
                        <div className="mt-1">
                        <textarea
                            id="post"
                            name="post"
                            rows={8}
                            value={post}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={''}
                            onChange={(e)=>setPost(e.target.value)}
                        />
                        </div>                        
                    </div>

                    <div>
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
                    </div>
                

                    <div className="form-group">
                        <label 
                            className="block text-sm font-medium text-gray-700" 
                            for="tag"
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
