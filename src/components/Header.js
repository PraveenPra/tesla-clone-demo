import {React,useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false)
    return (
        <Container>
          <a>
              <img src='/images/logo.svg'/>
                      </a>

                      <Menu>
                          <a href='#'>Model s</a>
                      <a href='#'>Model s</a>
                      <a href='#'>Model s</a>
                      <a href='#'>Model s</a>

                      </Menu>
                      <RightMenu>
                          <a href='#'>Shop</a>
                          <a href='#'>Tesla Account</a>
                          <CustomMenu onClick={()=>setBurgerStatus(true)}/>

                        
                      </RightMenu>
                      <BurgerNav show={burgerStatus}>
                         <CloseWrapper> <Close onClick={()=>setBurgerStatus(false)}/> </CloseWrapper>
                          <li><a href='#'>Existing inventory</a></li>
                          <li><a href='#'>Trade in</a></li>
                          <li><a href='#'>Cybertruck</a></li>
                          <li><a href='#'>used inventory</a></li>
                          <li><a href='#'>Model x</a></li>
                          <li><a href='#'>Model y</a></li>
                          <li><a href='#'>model z</a></li>
                          <li><a href='#'>solar systems</a></li>
                      </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
`
const Menu = styled.div`
display:flex;
align-items:center;
a{color:black;
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{color:black;
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav= styled.div`
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
transform:${props => props.show ? "translateX(0%)":"translateX(100%)"};
li{
    
    padding:15px 0;
    border-bottom:1px solid grey;
    a{
        color:black;
        font-weight:600;
    }
}
`
const Close=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`