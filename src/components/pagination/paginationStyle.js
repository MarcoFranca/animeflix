import styled from "styled-components";
import {font} from "../../assets/global/font/fonts";

export const Ul = styled.ul`
  ${font.blackDark};
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem 0;

  .pagination--active {
    color: darkgoldenrod;
    //background-color: rgba(0, 0, 0, 0.35);
    pointer-events: none;
    scale: 1.3;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%; /* 100% + blur * 2 */
      height: 100%; /* 100% + blur * 2 */
      border: black;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.45);
      filter: blur(1px);
      z-index: -1;
    }
  }
`

export const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  min-width: 2rem;
  min-height: 2rem;
  
  :hover{
    background-color: darkgoldenrod;
    transition: 300ms;
    scale: 1.1;
  }
`
export const ButtonNePr = styled.button`
  border: gray;
  background: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  min-width: 2rem;
  min-height: 2rem;

  :disabled {
    background-color: rgba(169, 169, 169, 0.45);
    color: gray;
    cursor: initial;
    :hover{
      background-color:rgba(169, 169, 169, 0.45) ;
      scale: none;
    }
  }

  :hover {
    background-color: darkgoldenrod;
    transition: 300ms;
    scale: 1.1;
  }



`