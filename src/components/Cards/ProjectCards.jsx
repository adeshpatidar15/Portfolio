import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 115%;
    height: 100%;
    background-color: ${({ theme }) => theme.grey};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 0px 2px rgba(0,0,0,0.4);
    overflow: visible; /* Ensure overflow content is visible */
    padding: 26px 20px;
    display: flex;
    // justify-content: right;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 0 20px 3px rgba(0,0,0,0.6);
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
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
font-family: "Neuton", serif;
    font-size: 30px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
font-family: "Neuton", serif;
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.black};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
font-family: "Neuton", serif;
    font-size: 30px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.black + 90 };
    @media only screen and (max-width: 768px){
        font-size: 20px;
    }
`


const Description = styled.div`
font-family: "Neuton", serif;
font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.black + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
const Li = styled.li`
text-align: justify;
text-justify: distribute;
text-align-last: left;
hyphens: auto;
-webkit-hyphens: auto;
word-spacing: -0.05em;


overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    
    text-align: left
`
  
  

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
           
            
            <Description>{Array.isArray(project.description) && project.description.map((item, index) => (
             
                <Li key={index}><li>{item}</li></Li>
                
              ))}</Description>
              
            </Details>
        </Card>
    )
}

export default ProjectCards