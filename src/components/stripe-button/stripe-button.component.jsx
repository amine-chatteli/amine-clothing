import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HNYaGGw9tAJLO4T7QrIPDbP48Mp7Iq89UssjWFe4BD9HF39BXGqKu60kyEmbmPybw7QFexocOmDYdsP15qWyap900GVjSTaPe';
   const onToken = token => {
        console.log(token);
        alert('SUCCESS!!')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Amine Clothing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe} $
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;