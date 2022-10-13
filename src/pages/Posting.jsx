import React, {useState}  from 'react';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import {db} from '../firebase';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import {storage} from '../firebase';
import { signOut } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const Posting = () => {
    const [formData, setFormData] = useState({
        title: "",
        tag:"",
        post:"",
        postimage:"",
        createdAt: Timestamp.now().toDate(),
    })

    

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [post, setPost] = useState("");
    // const [imageUpload ,setImageUpload] = useState([]);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();    
    const auths = useAuthContext();
 

    const handleImageChange = (e) => {
        setFormData({...formData, postimage:e.target.files[0] });        
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    // console.log("user", auths.user());
    console.log("user", auths.users);

    const onBlogPost = async (e) =>{
        console.log(formData);
        // console.log(imageUpload);

        e.preventDefault();

        // try {
        //     const docRef = await addDoc(collection(db, "users"), {
        //       Title: formData.title,
        //       Tag: formData.tag,
        //       Post: formData.post,
        //     //   publish: db.firestore.Timestamp.fromDate(new Date())
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //     alert("Blog post added sucessfully")
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        //     alert("Unable to post to blog. Try again!")
        // }

        const storageRef = ref(
            storage, 
            `/images/${Date.now()}${formData.postimage.name}`
        );

        const uploadImage  = uploadBytesResumable(storageRef, formData.postimage);

        uploadImage.on(
            "state_changed", 
            (snapshot)=>{
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred /  snapshot.totalBytes) * 100
                );
                setProgress(progressPercent);
            },
            (err)=>{
                console.log(err);
            },
            ()=>{
                setFormData({
                    title: "",
                    tag:"",
                    post:"",
                    postimage:"",
                });

                getDownloadURL(uploadImage.snapshot.ref)
                .then((url) => {
                    const articleRef = collection(db, "users");
                    addDoc(articleRef,{
                        Title: formData.title,
                        Tag: formData.tag,
                        Post: formData.post,
                        postimage: url,
                        createdAt: Timestamp.now().toDate(),
                    })
                    .then(()=>{
                        alert("successfully added")
                    })
                    .catch(err=>{
                        alert("Error encountered")
                    })
                })
            }
        )
    }

    const onLogout = () => {
        
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful");
        console.log(auth)
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
                            name="title" 
                            value={formData.title}
                            // onChange={(e)=>setTitle(e.target.value)}
                            onChange={handleChange}
                            required 
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Post Image
                        </label>
                        {/* className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" */}
                        <input
                            type="file"
                            onChange={handleImageChange}
                            name="postimage"
                            accept="image/*"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Body
                        </label>
                        <div className="mt-1">
                        <textarea                            
                            name="post"
                            rows={10}
                            value={formData.post}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"                            
                            // onChange={(e)=>setPost(e.target.value)}
                            onChange={handleChange}
                        />
                        </div>                        
                    </div>                   
                
                    <div className="form-group">
                        <label 
                            className="block text-sm font-medium text-gray-700"                           
                        >
                            Tags
                        </label>
                        <input 
                            type="text" 
                            name="tag" 
                            value={formData.tag}
                            // onChange={(e)=>setTag(e.target.value)}
                            onChange={handleChange}
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
