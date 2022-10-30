import styled from "styled-components";
import {font} from "../../assets/global/font/fonts";

// ***************   Header   *****************

export const DetailHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  color: white;
  box-sizing: border-box;
  -webkit-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  -moz-box-shadow: 0 6px 20px 3px rgba(0,0,0,0.67);
  box-shadow: 0 6px 20px 13px rgba(0,0,0,0.67);
`

export const DetailHeaderBanner = styled.div`
  display: flex;
  width: 100%;
  min-height: 250px;
  height: 45vh;
  background-image: url(${(props)=> props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`


export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0);
  padding: 25px;
  box-sizing: border-box;
  -webkit-box-shadow: 0 6px 20px 3px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: 0 6px 20px 3px rgba(0, 0, 0, 0.67);
  box-shadow: 0 6px 20px 13px rgba(0, 0, 0, 0.67);

  h1 {
    ${font.blackDark};
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.8), darkgoldenrod 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
    font-weight: 600;
  }
`
// ***************   Main   *****************

export const DetailMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333232;
  color: white;
  padding: 25px;
  ${font.blackDark}
`

export const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`

export const DetailContentCard = styled.div`
  background-image: url(${(props)=>props.image});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20rem;
  width: 15rem;
  border-radius: 5px;
  border: solid 3px darkgoldenrod;
`

export const DetailContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 50%;
  max-height: 330px;
  ${font.blackDark};
  h2{
    font-size: 1.6rem;
    font-weight: 500;
  }

  p{
    text-align: justify;
    font-size: 1.2rem;
    padding: 5px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: black;        /* color of the tracking area */
      -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.67);
      -moz-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.67);
      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.67);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: darkgoldenrod;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid black;  /* creates padding around scroll thumb */
    }
  }


`
export const DetailContentRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  max-height: 330px;
  
  h3{
    font-size: 1.6rem;
    font-weight: 500;
  }

  p{
    text-align: justify;
    font-size: 1.2rem;
    padding: 5px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: black;        /* color of the tracking area */
      -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.67);
      -moz-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.67);
      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.67);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: darkgoldenrod;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid black;  /* creates padding around scroll thumb */
    }
  }
`

export const ButtonHome = styled.button`
  border: gray;
  background: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  min-height: 2rem;
  width: 10rem;
  :hover {
    background-color: darkgoldenrod;
    transition: 300ms;
    scale: 1.1;
  }
`

export const DetailTrailer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    padding: 2rem;
    font-size: 1.6rem;
    font-weight: 500;
  }
`

export const CardTitle = styled.h2`
    
    padding: 1.8rem;
    font-size: 1.6rem;
    font-weight: 500;
`