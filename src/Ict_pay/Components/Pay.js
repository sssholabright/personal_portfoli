import React from 'react'
import { usePaystackPayment } from 'react-paystack'

export default function Pay() {

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_c068e4c7466e000a309d59a7f8fae2a503a4d2b1',
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
          <div>
              <button onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Paystack Hooks Implementation</button>
          </div>
        );
    };

    return (
        <div>
            <PaystackHookExample />
        </div>
    )
}

  
  