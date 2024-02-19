import styled from 'styled-components';
// import _default from '../../themes/default';

export const Nav = styled.div`
    background-color: Floralwhite;
    width: 100%;
   height: 100%;
   border:2px solid black;
    
    font-size: 1rem;
    // position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
  //   @media (max-width: 1500px){
  //     
  // }
  @media (max-width: 768px){
      width: 100%;
  height: 100%;
`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    font-family: fantasy;
    font-weight: 900;
    font-size: 80px;
    color: black;
    @media screen and (max-width: 1024px) { 
    //   // margin-top: -20px;
      display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    } 
    @media (max-width: 768px) {
      display: flex;
    align-items: center;
    justify-content: start;
      margin-top: 0px;
      font-size: 45px;
    }
`;


export const ResumeButton = styled.a`
width: fit-content;
padding: 10px 20px; /* Adjust padding as needed */
font-size: 16px; /* Adjust font size as needed */
font-weight: bold;
box-shadow: 1px 2px 2px 3px rgba(0,0,0,0.4);
text-decoration: none;
color: black;
background-color: FloralWhite;
// border: none;
border:3px solid black;
  // border-radius: 10px 40px 40px 10px;
border-radius: 20px;
cursor: pointer;
transition: all 0.5s ease-in-out;
}

&:hover {

transform: translateY(-1px);
      box-shadow: 0 0 0px 0px rgba(0,0,0,0.2);
      // filter: brightness(1.1);
}
@media screen and (max-width: 768px) {
  font-size: 10px;
  padding: 10px 10px;
}
`;

export const ButtonContainer = styled.div`
  width: 100%;  
  height: 100%;
  margin-top: -6%;
  margin-left: -4%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    margin-top: -7%;
  margin-left: -2%;
    display: flex;
  justify-content: end;
  align-items: center;
  }
  @media screen and (max-width: 640px) {
    margin-top: -9%;
  margin-left: -2%;
    display: flex;
  justify-content: end;
  align-items: center;
  }
`;

export const Button = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    margin-top: 20px;
    padding: 0 4px;
    font-weight: 600;
    font-size: 30px;
    color: black;
`;
export const GitHubButton = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  // border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 800;
  text-decoration: underline;
  font-size: 30px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: 
      ${({ theme }) => theme.primary};
      color: BlueViolet;   
    }
    
    @media screen and (max-width: 1024px) { 
      
      margin-top: -20px;
    font-size: 30px;
    } 
    @media screen and (max-width: 768px) { 
      
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: -20px;
    font-size: 30px;
    }
`;
