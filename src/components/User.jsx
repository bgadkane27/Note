import styled from "styled-components";

const ModalBackground = styled.div`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 50%;
`;

const user = {
  name: "Madhubala",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 100,
};

const User = () => {
  return (
    <>
      <ModalBackground>
        <h1>{user.name}</h1>
        <Image
          src={user.imageUrl}
          alt={`Image of ${user.name}`}
          style={{
            width: user.imageSize,
            // height: user.imageSize,
          }}
        />
      </ModalBackground>
    </>
  );
};

export default User;
