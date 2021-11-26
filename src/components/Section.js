import React from "react";
import styled from "styled-components";


function Section({title,desc,leftButton,rightButton,bgImg}) {
  return (
    <Wrap bgImage={bgImg}>
      
      <ItemText>
        <Title>{title}</Title>
        <p>{desc}</p>
      </ItemText>
      
<div>
      <ButtonGroup>
        <LeftButton>{leftButton}</LeftButton>

        {rightButton && 
        <RightButton>{rightButton}</RightButton>}
        
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`

  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

const Title = styled.h1`
font-size:3em;
font-weight:600;
color:rgba(0,0,0,0.7)`

const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width:768px){
      flex-direction:column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px;
`;

const RightButton = styled(LeftButton)`
background-color: white;
opacity:0.65;
color:black;
`

const DownArrow = styled.img`
height:40px;

animation: animationDown infinite 1.5s
`
