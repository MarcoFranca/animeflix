import styled from "styled-components";
import {font} from "../../assets/global/font/fonts";

export const FooterDiv = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.blackDark}
  color: white;
  background-color: rgba(0, 0, 0);
  -webkit-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  -moz-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  box-shadow: 0 6px 20px 13px rgba(0,0,0,0.67);
  padding: 25px;
`