import styled from "styled-components";
import {font} from "../../assets/global/font/fonts";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333232;
  min-height: 100vh;

`

export const Main = styled.main`
  ${font.darkBlackD};
  min-height: 100%;

`

export const Title = styled.div`
  display: flex;
  ${font.blackDark};
  justify-content: center;
  text-shadow: rgba(184, 134, 11, 0.21) 0 2px 15px, rgba(184, 134, 11, 0.34) 0 6px 9px;
  padding: 20px;
  font-size: 3rem;
  letter-spacing: 5px;
  color: rgba(184, 134, 11);
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  padding: 25px;

  .loading{
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    width: 100px;
    color: white;
    letter-spacing: 2px;

    img{
      width: 100%
    }
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333232;
  color: white;
  border: solid 1px #727070;
  border-radius: 5px;
  overflow: hidden;

  :hover {
    transform: scale(1.1);
    transition: 300ms;
    border: solid 2px rgba(184, 134, 11);
  }
  img {
    object-fit: cover;
    width: 100%;
  }  
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: initial;
  //min-height: 70px;
  gap: 10px;
  justify-content: space-evenly;
  letter-spacing: 0.1rem;
  font-size: 0.96rem;
  h1{
    
  }
  span{
    //font-family: "Open Sans", sans-serif;
    ${font.blackDark}
    font-size: 1rem;
  }
  
`