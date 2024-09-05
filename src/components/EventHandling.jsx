import styled from "styled-components";

const Button = styled.button`
padding: 1.2rem 2.4rem;
background-color: cyan;`

const onButtonClick=()=>{
    alert("Cliked on me")
}

export const EventHandling = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Button onClick={onButtonClick}>Click me</Button>
    </>
  );
};
