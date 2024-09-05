import React, { useState } from "react";
import styled from "styled-components";

// Styled-component for modal background
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled-component for modal box
const ModalBox = styled.div`
  width: 20%;
  height: 20%;
  background-color: green;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Para = styled.p({
  fontSize: "1.4rem",
  padding: "0.2rem 0",
  fontStyle: "italic",
});

const Button = styled.button`
  margin: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: green;
  border: 0.2rem solid #fff;
`;

const Button1 = styled.button`
  margin: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: green;
//   border: 0.2rem solid #fff;
`;

// Main Component
const ConfirmationDialog = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
  const [response, setResponse] = useState(null); // State to store user's response

  // Function to open the dialog
  const handleButtonClick = () => {
    setIsOpen(true);
  };

  // Function to handle user response
  const handleConfirm = (answer) => {
    setResponse(answer);
    setIsOpen(false); // Close the modal after getting response
  };

  return (
    <div>
      <Button1 onClick={handleButtonClick}>Click Me!</Button1>

      {/* Display response */}
      {response !== null && <p>Your response: {response ? "Yes" : "No"}</p>}

      {/* Modal */}
      {isOpen && (
        <ModalBackground>
          <ModalBox>
            <Para>Do you want to proceed?</Para>
            <Button onClick={() => handleConfirm(true)}>Yes</Button>
            <Button onClick={() => handleConfirm(false)}>No</Button>
          </ModalBox>
        </ModalBackground>
      )}
    </div>
  );
};

export default ConfirmationDialog;
