import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabeKey =
    "pk_test_51ITOoFGHqx6F5LuUA1JVuRKuDVhRmnJ3cE13LyX9bqggdtUFgBA805ukWVFHYUEVbIGp2CXJ2sG7GUp9NN27MZff008voOHhUd";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishabeKey}
    />
  );
};

export default StripeButton;
