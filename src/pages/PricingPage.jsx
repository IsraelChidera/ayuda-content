import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const PricingPage = () => {
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
    <section className='pt-20 px-8 lg:px-32 pb-20'>
        <div>
            <h1 className='text-4xl'>
                Plans {"&"} Pricing
            </h1>
            <p>
                You can choose and manage 
                subscriptions from here. 
                Browse plans, start a subscription
                at any time.
            </p>
        </div>

        <div className='mt-10 md:space-y-0 space-y-10 md:grid grid-cols-4 gap-6'>
            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>            

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

            <div className='pricelist flex justify-center items-center'>
                <div className='p-6 text-center'>
                    <h2 className='text-2xl font-extrabold'>
                        $84/Month
                    </h2>

                    <p className='mt-2 mb-8'>
                        4 Per Month @ 300
                        words ea.
                    </p>

                    <div className='flex justify-center items-center'>
                        {/* <Link to="/plans-pricing"> */}
                            <button 
                                className="px-6 py-3 text-sm             
                                font-semibold rounded-full border 
                                border-purple-200 bg-primary text-white"
                            >
                                Subscribe
                            </button>
                        {/* </Link>  */}
                    </div>
                </div>
            </div>

        </div>

        <div className='mt-10 p-2  bg-darker'>
            <form id="paymentForm">
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email-address" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required 
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
                    />
                </div>
                <div className="form-group">
                    <label for="first-name">First Name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        value={firstname}
                        onChange={(e)=>setFirstname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="last-name">Last Name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        value={lastname}
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                </div>
                <div className="form-submit">
                    <button 
                        type="submit" 
                        onClick={payWithPaystack}
                    > 
                        Pay
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default PricingPage