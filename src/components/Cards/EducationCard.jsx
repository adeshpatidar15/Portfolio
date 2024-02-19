import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
    width: 100%;
    font-family: "Neuton", serif;
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.black + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 30px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
// -webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
width: 115%;
height: 100%;
background-color: ${({ theme }) => theme.grey};
cursor: pointer;
border-radius: 10px;
 box-shadow: 0 0 0px 0px rgba(0,0,0,0.4);
overflow: visible; /* Ensure overflow content is visible */
padding: 26px 20px;
display: flex;
align-items: right;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
&:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 1px 3px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}

@media (max-width: 1500px){
    width: 100%;
height: 100%;
}
@media (max-width: 768px){
    width: 100%;
height: 100%;
}
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
font-family: "Neuton", serif;
    font-size: 35px;
    font-weight: 800;
    color: ${({ theme }) => theme.black};
    @media only screen and (max-width: 768px){
        font-size: 25px;
    }
`

const Degree = styled.div`
font-family: "Neuton", serif;
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.black + 99};
    @media only screen and (max-width: 768px){
        font-size: 25px;
    }
`

const Date = styled.div`
font-family: "Neuton", serif;
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.black + 80};
    @media only screen and (max-width: 768px){
        font-size: 20px;
    }
`



const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard