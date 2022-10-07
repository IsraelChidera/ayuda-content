import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Layout from '../components/Layout';

const Checkout = () => {
    const [email, setEmail]= useState("");
    const [amount, setAmount] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState(""); 

    const payWithPaystack = (e) => {
        e.preventDefault();
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key:"pk_test_131cda27a7f3959aa195063b755e392acc385460",
            amount:amount*100,
            // currency: 'USD',
            email,
            firstname,
            lastname,      
            onSuccess(transaction){
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message);
                setEmail("");
                setAmount("");
                setFirstname("");
                setLastName("");
            },
            onCancel(){
                alert("You have canceled the transaction")
            }
        })
    }

    return (
        <Layout>
            <section className='pt-20 px-8 lg:px-64 pb-20'>

                <div>
                    <h1 className='text-4xl md:text-center'>
                        Checkout
                    </h1>            
                </div>

                <div className='md:mt-10 mt-6 md:flex justify-between items-center'>
                    <p className='text-lg'>
                        8 articles per month
                    </p>

                    <p className='font-semibold'>
                        Total: {" "}
                        <span>
                            $84
                        </span>
                    </p>
                </div>

                <div className='mt-10 p-2  text-darker'>
                    <form id="paymentForm" className='space-y-6'>
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email-address" 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required 
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                            />
                        </div>

                        <div className="form-group">
                            <label for="amount">Amount</label>
                            <input 
                                type="tel" 
                                id="amount" 
                                value={amount}
                                onChange={(e)=>setAmount(e.target.value)}
                                required 
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                            />
                        </div>

                        <div className="form-group">
                            <label for="first-name">First Name</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                value={firstname}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                onChange={(e)=>setFirstname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label for="last-name">Last Name</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                value={lastname}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>

                        <div className="form-submit">
                            <button 
                                type="submit" 
                                onClick={payWithPaystack}
                                className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                            > 
                                Pay
                            </button>
                        </div>
                    </form>
                </div>
                
            </section>
        </Layout>
    )
}

export default Checkout