import { useState } from "react";

export default function GiftCardPage() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  // The lab was to implement this function to update the state when the user clicks on the button
  // and uses the coupon
  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  }

  return (
    <div>
      <h3>Gift Card Page</h3>
      <h5>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h5>
      <h4>{giftCard.text}</h4>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
