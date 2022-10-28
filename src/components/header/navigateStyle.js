import styled from "styled-components";
import {font} from "../../assets/global/font/fonts";

export const Header = styled.header`
  height: auto;
  color: white;
  box-sizing: border-box;
  -webkit-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  -moz-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  box-shadow: 0 6px 20px 13px rgba(0,0,0,0.67);
`
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  color: white;
  padding: 25px;
  gap: 25px;
  box-sizing: border-box;
  -webkit-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  -moz-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  box-shadow: 0 6px 20px 13px rgba(0,0,0,0.67);
  z-index: 5;
  
`

export const Ul = styled.ul`
  display: flex;
  height: 100%;
  ${font.blackDark}
  gap: 25px;
`

export const Li = styled.li`
    cursor: pointer;
    color: ${(props)=> props.colorBtn?"rgba(184, 134, 11)": "rgba(255, 255, 255)"};
    :hover {
      color: rgba(184, 134, 11);
      transition: 500ms;
    }
  
  
`



export const Banner = styled.div`
  display: flex;
  margin-top: 67px;
  width: 100%;
  height: 250px;
  background-image: url(${(props)=> props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
