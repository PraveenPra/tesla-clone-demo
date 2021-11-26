import { React, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, i) => (
            <a key={i} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          
          <Close onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, i) => (
            <li key={i}><a  href="#">
              {car}
            </a></li>
          ))}
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">used inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li><LanguageIcon/>
          <a href="#">India</a>
          <h6>English</h6>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
overflow: auto;
position:fixed;
background:white;
top:0;
bottom:0;
right:0;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display;flex;
flex-direction:column;
text-align:start;
transform:${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
transition:transform 0.2s ;
li{
    
    padding:15px 0;
    // border-bottom:1px solid gray;
    a{
        color:gray;
        font-weight:600;
    }
    a:hover{
        color:black;
    
    }
}
li:hover{
    // padding:20px 0;
    background:rgba(0,0,0,0.1);
    border-radius:10px;
    a{
        color:black;
        padding:25px 10px;
        font-size:1.2em;
    }
}
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
