import StripeCheckout from "react-stripe-checkout";

import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K2G58LxljjIg2cX4feM1FAjNfWatLzZ508sWp5k0BwhGQoP26MUENGlrRPOZfxWFoG6MUX5szMjRr0Pl3pf1Mip00yVLbZnj5";

  const onToken = (token) => {
    console.log(token);
    alert(`Payment successful`);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
