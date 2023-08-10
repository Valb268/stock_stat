import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  width: 1440px;
  height: 96px;
  display: flex;
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  align-items: center;
  justify-content: space-evenly;
  background-color: #04031C;
`

export const Logo = styled.div`
//background-image: url(../../../images/home/logo.svg);
  //width: 215px;
  //height: 33px;
  //top: 31px;
  //left: 48px;
  //padding: 0;
`

export const NavHeader = styled.nav`
  margin: 0;
  width: 50%;
  min-width: 500px;
  display: flex;
  //align-items: center;
  justify-content: space-evenly;
  color: #000;
`

export const ULstyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItemsHeaderStyled = styled.li`
  color: #595656;
  margin: 10px;
  font-size: 20px;
  letter-spacing: 1px;
  transition: color 0.2s ease-in-out;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  
  &:hover {
    color: rgb(193, 14, 14)
  }
  
`

export const ULcontacts = styled.ul`
  display: flex;
  li {
    margin: 10px;
  }
`

