import styled from "styled-components";


export const Container = styled.footer`
  font-size: 10px;
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;


  .logo{
    font-size: 2.8rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;

      &:hover {
        -webkit-filter: brightness(70%);
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`