import React, {useState} from 'react';
import Layout from '../components/Layout';
import { useAuthContext } from '../context/authContext';

const Admin = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const auths = useAuthContext();

   
    console.log("auths: ", auths);
    // console.log("add", auths.add(4))
    console.log("user", auths.users);
    const onAdminLogin = () => {
        auths.signIn(email, password)       
    }

    return(
        <>
            <Layout>
                <section className=" lg:w-1/2 mx-6 lg:mx-auto px-4 lg:px-10  pb-8 mt-40 mb-40 admin rounded-md">
                    <h1 className="text-xl font-bold pt-10 border-b-1 border-black pb-2">
                        Log in
                    </h1>

                    <div className="col-span-3 sm:col-span-2 lg:text-base text-sm">                    

                        <div className="mt-1 flex rounded-md shadow-sm ">
                            <span className="bg-secondary text-white inline-flex items-center py-2 rounded-l-md border border-r-0 border-primary bg-gray-50 px-3 text-sm text-gray-500">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border-l px-3 py-2 bg-white border border-primary rounded-r-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" 
                                placeholder="email@email.com"
                            />
                        </div>
                    </div>

                    <div className="mt-6 col-span-3 sm:col-span-2">                    
                        <div className="mt-1 flex rounded-md shadow-sm ">
                            <span className="bg-secondary text-white inline-flex items-center py-2 rounded-l-md border border-r-0 border-primary bg-gray-50 px-3 text-sm text-gray-500">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-l px-3 py-2 bg-white border border-primary rounded-r-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" 
                                placeholder="password"
                            />
                        </div>
                    </div>

                    <div className="px-4 py-3 text-right sm:px-6">
                    <button
                        onClick={onAdminLogin}
                        type="submit"
                        className="inline-flex bg-primary justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >                        
                        {auths.loading? 'Logging in ...':'Login'}                        
                    </button>
                    </div>
                </section>    
            </Layout>            
        </>
    )
}

export default Admin