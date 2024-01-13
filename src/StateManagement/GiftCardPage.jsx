import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";

const StyledContainer = styled.div`
  padding: 40px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
`;

export default function GiftCardPage() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });
  const { theme } = useTheme();

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
    <StyledContainer theme={theme}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </StyledContainer>
  );
}
