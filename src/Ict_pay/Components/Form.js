import './Form.css'
import React from 'react'
import { usePaystackPayment } from 'react-paystack'

export default function Form() {

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "naictskwasuchapter@gmail.com",
        amount: 110000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_live_37853894388994a03d7d395c1c0027ae4dee8982',
    };

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        alert("Your Payment is successful. Go Naicts Office to collect your receipt")
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div className='formPage'>
                <div className='transparent'>
                    <div className='formContainer'>
                        <div className='header_logo'>
                            <img src='/ict.jpg' alt='ict_image' width="25%" height="25%" />
                            <div>
                                <h1>NAICTS</h1>
                                <h2>Payment Portal</h2>
                            </div> 
                        </div>
                        <p>Fill in the form below to complete your payment.</p>
                        <div className='formBox'>
                            <input 
                                name="name" 
                                type="text" 
                                placeholder='Full Name'
                                className='form' 
                            />
                        </div>
                        <div className='formBox'>
                            <input 
                                name="username" 
                                type="text" 
                                placeholder='Matric. Number'
                                className='form'
                            />
                        </div>
                        <div className='formBox'>
                            <select className='select'>
                                <option>-- Select Department --</option>
                                <option>Computer Science</option>
                                <option>Library and Information Science</option>
                                <option>Mass Communication</option>
                            </select>
                        </div>
                        <div className='formBox'>
                            <select className='select'>
                                <option>-- Select Level --</option>
                                <option>100 Level</option>
                                <option>200 Level</option>
                                <option>300 Level</option>
                                <option>400 Level</option>
                            </select>
                        </div>

                        <div className='formBox'>
                            <input 
                                name="submit" 
                                type="button" 
                                value="PROCEED TO PAY"
                                className='form'
                                id='submit'
                                onClick={() => {
                                    initializePayment(onSuccess, onClose)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
    return (
        <div>
            <PaystackHookExample />
        </div>
    )
}